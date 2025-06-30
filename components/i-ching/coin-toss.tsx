"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, RotateCcw } from 'lucide-react';

interface CoinTossProps {
  onComplete: (lines: boolean[], changingLines: number[]) => void;
}

interface CoinResult {
  coin1: 'heads' | 'tails';
  coin2: 'heads' | 'tails';
  coin3: 'heads' | 'tails';
  value: number;
  isYang: boolean;
  isChanging: boolean;
}

export function CoinToss({ onComplete }: CoinTossProps) {
  const [currentLine, setCurrentLine] = useState(1);
  const [results, setResults] = useState<CoinResult[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const tossCoin = (): 'heads' | 'tails' => {
    return Math.random() < 0.5 ? 'heads' : 'tails';
  };

  const calculateLineValue = (coin1: 'heads' | 'tails', coin2: 'heads' | 'tails', coin3: 'heads' | 'tails') => {
    const headValue = 3;
    const tailValue = 2;
    
    const total = 
      (coin1 === 'heads' ? headValue : tailValue) +
      (coin2 === 'heads' ? headValue : tailValue) +
      (coin3 === 'heads' ? headValue : tailValue);
    
    return total;
  };

  const handleCoinToss = async () => {
    setIsAnimating(true);
    setShowInstructions(false);
    
    // Simulate coin toss animation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const coin1 = tossCoin();
    const coin2 = tossCoin();
    const coin3 = tossCoin();
    const value = calculateLineValue(coin1, coin2, coin3);
    
    // Determine line type based on traditional I Ching values
    const isYang = value % 2 === 1; // 9 or 7 (odd) = Yang, 8 or 6 (even) = Yin
    const isChanging = value === 6 || value === 9; // 6 = changing yin, 9 = changing yang
    
    const newResult: CoinResult = {
      coin1,
      coin2,
      coin3,
      value,
      isYang,
      isChanging
    };
    
    const newResults = [...results, newResult];
    setResults(newResults);
    setIsAnimating(false);
    
    if (currentLine < 6) {
      setCurrentLine(currentLine + 1);
    } else {
      // All lines complete, generate hexagram
      const lines = newResults.map(r => r.isYang);
      const changingLines = newResults
        .map((r, index) => r.isChanging ? index + 1 : null)
        .filter(Boolean) as number[];
      
      onComplete(lines, changingLines);
    }
  };

  const resetReading = () => {
    setCurrentLine(1);
    setResults([]);
    setShowInstructions(true);
  };

  const renderCoin = (coin: 'heads' | 'tails', index: number) => (
    <div
      key={index}
      className={`w-12 h-12 rounded-full border-2 border-mystical-gold flex items-center justify-center font-bold text-sm transition-all duration-300 ${
        coin === 'heads' 
          ? 'bg-mystical-gold text-mystical-dark-purple' 
          : 'bg-mystical-dark-purple text-mystical-gold'
      } ${isAnimating ? 'animate-spin' : ''}`}
    >
      {coin === 'heads' ? '☰' : '☷'}
    </div>
  );

  return (
    <Card className="mystical-card">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2 text-mystical-gold">
          <Coins className="w-6 h-6" />
          <span>Three Coin Oracle</span>
        </CardTitle>
        <CardDescription>
          Traditional I Ching method using three coins to generate hexagram lines
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {showInstructions && (
          <div className="bg-mystical-gold/5 p-4 rounded-lg border border-mystical-gold/20">
            <h4 className="font-semibold text-mystical-gold mb-2">How to Cast</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Think of your question clearly</li>
              <li>• Toss three coins six times to build your hexagram</li>
              <li>• Each toss creates one line, starting from the bottom</li>
              <li>• Heads = 3 points, Tails = 2 points</li>
              <li>• 6 points = changing yin, 7 = yin, 8 = yang, 9 = changing yang</li>
            </ul>
          </div>
        )}

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
              Line {currentLine} of 6
            </Badge>
            <Badge variant="outline" className="border-mystical-gold/30">
              Position: {7 - currentLine} (from bottom)
            </Badge>
          </div>

          {results.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-mystical-gold">Cast Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((result, index) => (
                  <Card key={index} className="bg-background/50">
                    <CardContent className="p-4">
                      <div className="text-center space-y-2">
                        <div className="text-sm font-medium text-mystical-gold">
                          Line {index + 1}
                        </div>
                        <div className="flex justify-center space-x-1">
                          {renderCoin(result.coin1, 0)}
                          {renderCoin(result.coin2, 1)}
                          {renderCoin(result.coin3, 2)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Total: {result.value} - {result.isYang ? 'Yang' : 'Yin'}
                          {result.isChanging && ' (Changing)'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentLine <= 6 && (
            <div className="space-y-4">
              <Button
                onClick={handleCoinToss}
                disabled={isAnimating}
                size="lg"
                className="mystical-button w-full"
              >
                <Coins className="w-5 h-5 mr-2" />
                {isAnimating ? 'Casting...' : `Cast Line ${currentLine}`}
              </Button>
            </div>
          )}

          {results.length === 6 && (
            <div className="space-y-4">
              <div className="text-center p-4 bg-mystical-gold/5 rounded-lg border border-mystical-gold/20">
                <p className="text-mystical-gold font-semibold">
                  Hexagram complete! Your reading is ready.
                </p>
              </div>
              <Button
                onClick={resetReading}
                variant="outline"
                className="w-full border-mystical-gold/30 hover:border-mystical-gold"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Cast New Reading
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}