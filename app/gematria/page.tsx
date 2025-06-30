"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calculator, 
  BookOpen, 
  Star, 
  Hash,
  Languages,
  Sparkles
} from 'lucide-react';

type CipherType = 'hebrew' | 'greek' | 'english' | 'simple';

interface GematriaResult {
  value: number;
  cipher: string;
  breakdown: { char: string; value: number }[];
}

const hebrewValues: { [key: string]: number } = {
  'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
  'י': 10, 'כ': 20, 'ל': 30, 'מ': 40, 'נ': 50, 'ס': 60, 'ע': 70, 'פ': 80, 'ץ': 90,
  'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400, 'ך': 500, 'ם': 600, 'ן': 700, 'ף': 800, 'ץ': 900
};

const greekValues: { [key: string]: number } = {
  'α': 1, 'β': 2, 'γ': 3, 'δ': 4, 'ε': 5, 'ϝ': 6, 'ζ': 7, 'η': 8, 'θ': 9,
  'ι': 10, 'κ': 20, 'λ': 30, 'μ': 40, 'ν': 50, 'ξ': 60, 'ο': 70, 'π': 80, 'ϙ': 90,
  'ρ': 100, 'σ': 200, 'τ': 300, 'υ': 400, 'φ': 500, 'χ': 600, 'ψ': 700, 'ω': 800, 'ϡ': 900
};

export default function Gematria() {
  const [inputText, setInputText] = useState('');
  const [selectedCipher, setSelectedCipher] = useState<CipherType>('english');
  const [results, setResults] = useState<GematriaResult[]>([]);

  const calculateEnglishGematria = (text: string): GematriaResult => {
    const breakdown: { char: string; value: number }[] = [];
    let total = 0;

    for (const char of text.toLowerCase()) {
      if (char >= 'a' && char <= 'z') {
        const value = char.charCodeAt(0) - 96; // a=1, b=2, etc.
        breakdown.push({ char: char.toUpperCase(), value });
        total += value;
      }
    }

    return {
      value: total,
      cipher: 'English Ordinal',
      breakdown
    };
  };

  const calculateSimpleGematria = (text: string): GematriaResult => {
    const breakdown: { char: string; value: number }[] = [];
    let total = 0;

    for (const char of text.toLowerCase()) {
      if (char >= 'a' && char <= 'z') {
        let value = char.charCodeAt(0) - 96;
        if (value > 9) {
          value = Math.floor(value / 10) + (value % 10);
        }
        breakdown.push({ char: char.toUpperCase(), value });
        total += value;
      }
    }

    return {
      value: total,
      cipher: 'Simple Reduction',
      breakdown
    };
  };

  const calculateHebrewGematria = (text: string): GematriaResult => {
    const breakdown: { char: string; value: number }[] = [];
    let total = 0;

    for (const char of text) {
      if (hebrewValues[char]) {
        const value = hebrewValues[char];
        breakdown.push({ char, value });
        total += value;
      }
    }

    return {
      value: total,
      cipher: 'Hebrew Standard',
      breakdown
    };
  };

  const calculateGreekGematria = (text: string): GematriaResult => {
    const breakdown: { char: string; value: number }[] = [];
    let total = 0;

    for (const char of text.toLowerCase()) {
      if (greekValues[char]) {
        const value = greekValues[char];
        breakdown.push({ char, value });
        total += value;
      }
    }

    return {
      value: total,
      cipher: 'Greek Isopsephy',
      breakdown
    };
  };

  const handleCalculate = () => {
    if (!inputText.trim()) return;

    const newResults: GematriaResult[] = [];

    switch (selectedCipher) {
      case 'hebrew':
        newResults.push(calculateHebrewGematria(inputText));
        break;
      case 'greek':
        newResults.push(calculateGreekGematria(inputText));
        break;
      case 'english':
        newResults.push(calculateEnglishGematria(inputText));
        break;
      case 'simple':
        newResults.push(calculateSimpleGematria(inputText));
        break;
    }

    setResults(newResults);
  };

  const calculateAll = () => {
    if (!inputText.trim()) return;

    const allResults: GematriaResult[] = [
      calculateEnglishGematria(inputText),
      calculateSimpleGematria(inputText)
    ];

    // Only calculate Hebrew/Greek if the text contains relevant characters
    if (/[\u0590-\u05FF]/.test(inputText)) {
      allResults.push(calculateHebrewGematria(inputText));
    }
    if (/[\u0370-\u03FF]/.test(inputText)) {
      allResults.push(calculateGreekGematria(inputText));
    }

    setResults(allResults);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-mystical-gold/10 border border-mystical-gold/20 mb-6">
            <Calculator className="w-4 h-4 text-mystical-gold mr-2" />
            <span className="text-sm font-medium text-mystical-gold">Sacred Numerology</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-mystical font-bold text-foreground mb-4">
            Gematria Calculator
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the hidden numerical values within words and names using ancient Hebrew, Greek, 
            and modern English gematria systems.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <Card className="mystical-card">
            <CardHeader>
              <CardTitle className="text-2xl text-mystical-gold font-mystical">
                Calculate Gematria
              </CardTitle>
              <CardDescription>
                Enter text to calculate its numerical value using various cipher systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="gematria-input" className="text-mystical-gold">
                  Enter Text or Name
                </Label>
                <Input
                  id="gematria-input"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter word, name, or phrase..."
                  className="bg-background/50 border-mystical-gold/20 focus:border-mystical-gold"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-mystical-gold">Cipher System</Label>
                <Select value={selectedCipher} onValueChange={(value: CipherType) => setSelectedCipher(value)}>
                  <SelectTrigger className="bg-background/50 border-mystical-gold/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English Ordinal (A=1, B=2...)</SelectItem>
                    <SelectItem value="simple">Simple Reduction</SelectItem>
                    <SelectItem value="hebrew">Hebrew Standard</SelectItem>
                    <SelectItem value="greek">Greek Isopsephy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={handleCalculate}
                  className="mystical-button flex-1"
                  disabled={!inputText.trim()}
                >
                  <Hash className="w-4 h-4 mr-2" />
                  Calculate
                </Button>
                <Button 
                  onClick={calculateAll}
                  variant="outline"
                  className="border-mystical-gold/30 hover:border-mystical-gold"
                  disabled={!inputText.trim()}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  All Systems
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="mystical-card">
            <CardHeader>
              <CardTitle className="text-2xl text-mystical-gold font-mystical">
                Results
              </CardTitle>
              <CardDescription>
                Numerical values and character breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className="p-4 bg-background/50 rounded-lg border border-mystical-gold/10">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
                          {result.cipher}
                        </Badge>
                        <div className="text-2xl font-bold text-mystical-gold">
                          {result.value}
                        </div>
                      </div>
                      
                      {result.breakdown.length > 0 && (
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">Character Breakdown:</div>
                          <div className="flex flex-wrap gap-2">
                            {result.breakdown.map((item, i) => (
                              <div key={i} className="text-xs bg-mystical-gold/5 px-2 py-1 rounded border border-mystical-gold/20">
                                {item.char} = {item.value}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter text above to see gematria calculations</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Information Tabs */}
        <Card className="mystical-card">
          <CardContent className="p-6">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="hebrew">Hebrew</TabsTrigger>
                <TabsTrigger value="greek">Greek</TabsTrigger>
                <TabsTrigger value="english">English</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-mystical text-mystical-gold">What is Gematria?</h3>
                  <p className="text-muted-foreground">
                    Gematria is an ancient practice of assigning numerical values to letters, words, and phrases. 
                    It has been used in various mystical traditions to find hidden connections and meanings within sacred texts.
                  </p>
                  <p className="text-muted-foreground">
                    The practice originated in Hebrew and Greek traditions but has been adapted to other languages. 
                    Each system uses different numerical assignments based on the alphabet and cultural context.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-mystical-gold/5 rounded-lg border border-mystical-gold/20">
                      <h4 className="font-semibold text-mystical-gold mb-2">Traditional Uses</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Biblical and Talmudic interpretation</li>
                        <li>• Kabbalistic meditation</li>
                        <li>• Name analysis and numerology</li>
                        <li>• Finding textual connections</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-mystical-gold/5 rounded-lg border border-mystical-gold/20">
                      <h4 className="font-semibold text-mystical-gold mb-2">Modern Applications</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Personal name analysis</li>
                        <li>• Spiritual study and meditation</li>
                        <li>• Comparative text analysis</li>
                        <li>• Esoteric research</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hebrew" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-mystical text-mystical-gold">Hebrew Gematria</h3>
                  <p className="text-muted-foreground">
                    Hebrew gematria is the original form, where each Hebrew letter has a specific numerical value. 
                    The system is based on the 22 letters of the Hebrew alphabet.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    {Object.entries(hebrewValues).slice(0, 12).map(([letter, value]) => (
                      <div key={letter} className="flex justify-between p-2 bg-background/50 rounded border border-mystical-gold/10">
                        <span className="font-hebrew text-lg">{letter}</span>
                        <span className="text-mystical-gold">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Values range from 1 (Aleph) to 400 (Tav), with final forms having higher values.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="greek" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-mystical text-mystical-gold">Greek Isopsephy</h3>
                  <p className="text-muted-foreground">
                    Greek isopsephy follows similar principles to Hebrew gematria, using the Greek alphabet. 
                    It was commonly used in ancient Greek mystical and philosophical traditions.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    {Object.entries(greekValues).slice(0, 12).map(([letter, value]) => (
                      <div key={letter} className="flex justify-between p-2 bg-background/50 rounded border border-mystical-gold/10">
                        <span className="font-greek text-lg">{letter}</span>
                        <span className="text-mystical-gold">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The Greek system includes some archaic letters for completeness of the numerical system.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="english" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-mystical text-mystical-gold">English Gematria</h3>
                  <p className="text-muted-foreground">
                    English gematria adapts the ancient practice to the modern English alphabet. 
                    Multiple systems exist, with the most common being the ordinal system (A=1, B=2, etc.).
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-mystical-gold mb-2">Ordinal System</h4>
                      <div className="grid grid-cols-6 md:grid-cols-13 gap-1 text-xs">
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => (
                          <div key={letter} className="flex flex-col items-center p-1 bg-background/50 rounded border border-mystical-gold/10">
                            <span className="font-semibold">{letter}</span>
                            <span className="text-mystical-gold">{index + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mystical-gold mb-2">Simple Reduction</h4>
                      <p className="text-sm text-muted-foreground">
                        Reduces double-digit values to single digits (e.g., J=10 becomes 1+0=1).
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}