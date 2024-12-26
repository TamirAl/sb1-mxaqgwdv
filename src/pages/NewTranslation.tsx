import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileUpload } from '../components/FileUpload';
import { PriceCalculator } from '../components/PriceCalculator';
import { LanguageSelect } from '../components/LanguageSelect';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';
import type { LanguageCode } from '../config/languages';

export default function NewTranslation() {
  const [file, setFile] = useState<File | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [sourceLanguage, setSourceLanguage] = useState<LanguageCode | ''>('');
  const [targetLanguage, setTargetLanguage] = useState<LanguageCode | ''>('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !sourceLanguage || !targetLanguage || !price) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Upload file to Supabase storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('documents')
        .upload(`original/${fileName}`, file);

      if (uploadError) throw uploadError;

      // Create translation order
      const { error: orderError } = await supabase
        .from('translation_orders')
        .insert([
          {
            source_language: sourceLanguage,
            target_language: targetLanguage,
            document_url: uploadData.path,
            price,
          },
        ]);

      if (orderError) throw orderError;

      toast.success('Translation order created successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Error creating translation order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">New Translation Request</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <LanguageSelect
              label="Source Language"
              value={sourceLanguage}
              onChange={setSourceLanguage}
              required
            />
            <LanguageSelect
              label="Target Language"
              value={targetLanguage}
              onChange={setTargetLanguage}
              required
            />
          </div>
          
          <FileUpload onFileSelect={handleFileSelect} />
          
          <div className="mt-8">
            <PriceCalculator 
              onPriceCalculated={setPrice}
              numberOfFiles={file ? 1 : 0}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !file || !sourceLanguage || !targetLanguage || !price}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating order...' : 'Submit Translation Request'}
          </button>
        </div>
      </form>
    </div>
  );
}