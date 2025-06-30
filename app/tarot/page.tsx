"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shuffle, 
  Sparkles, 
  Eye,
  RotateCcw,
  Heart,
  Star,
  Moon
} from 'lucide-react';

type ViewMode = 'intro' | 'reading';

export default function Tarot() {
  const [viewMode, setViewMode] = useState<ViewMode>('intro');

  const handleQuickReading = () => {
    setViewMode('reading');
  };

  const resetReading = () => {
    setViewMode('intro');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-mystical-gold/10 border border-mystical-gold/20 mb-6">
            <Shuffle className="w-4 h-4 text-mystical-gold mr-2" />
            <span className="text-sm font-medium text-mystical-gold">Divine Guidance</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-mystical font-bold text-foreground mb-4">
            Tarot Readings
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover insights and guidance through the ancient art of Tarot. 
            Draw cards and unlock the wisdom of the arcane symbols.
          </p>
        </div>

        {/* Content */}
        {viewMode === 'intro' && (
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="mystical-card">
              <CardHeader>
                <CardTitle className="text-2xl text-mystical-gold font-mystical">
                  About Tarot
                </CardTitle>
                <CardDescription className="text-lg">
                  Ancient wisdom through symbolic imagery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Tarot is a form of divination using a deck of 78 cards, each rich with symbolic meaning. 
                  The cards are divided into the Major Arcana (22 cards representing life's spiritual lessons) 
                  and Minor Arcana (56 cards representing daily experiences).
                </p>
                <p className="text-muted-foreground">
                  Through careful interpretation of the cards drawn, Tarot provides insights into your past, 
                  present, and future, helping you navigate life's challenges and opportunities with greater wisdom.
                </p>
              </CardContent>
            </Card>

            {/* Reading Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="mystical-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={handleQuickReading}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Eye className="w-8 h-8 text-purple-400 animate-float" />
                    <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
                      Quick
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-mystical text-foreground group-hover:text-mystical-gold transition-colors">
                    Single Card Reading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6">
                    Draw a single card for quick guidance and daily inspiration. 
                    Perfect for focused questions or daily reflection.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-mystical-gold rounded-full"></div>
                      <span>Instant guidance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-mystical-gold rounded-full"></div>
                      <span>Daily inspiration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-mystical-gold rounded-full"></div>
                      <span>Simple interpretation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mystical-card group hover:scale-105 transition-all duration-300 opacity-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Heart className="w-8 h-8 text-pink-400 animate-float" style={{ animationDelay: '0.2s' }} />
                    <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
                      Coming Soon
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-mystical text-foreground">
                    Three Card Spread
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6">
                    Past, Present, Future reading for deeper insights into your life's journey.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="mystical-card group hover:scale-105 transition-all duration-300 opacity-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Star className="w-8 h-8 text-amber-400 animate-float" style={{ animationDelay: '0.4s' }} />
                    <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
                      Coming Soon
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-mystical text-foreground">
                    Celtic Cross
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6">
                    Comprehensive 10-card spread for detailed life analysis and guidance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Featured Cards */}
            <Card className="mystical-card">
              <CardHeader>
                <CardTitle className="text-xl text-mystical-gold font-mystical">
                  Major Arcana Highlights
                </CardTitle>
                <CardDescription>
                  Explore some of the most powerful cards in the Tarot deck
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "The Fool", number: "0", keywords: ["New Beginnings", "Adventure"] },
                    { name: "The Magician", number: "I", keywords: ["Manifestation", "Power"] },
                    { name: "The High Priestess", number: "II", keywords: ["Intuition", "Mystery"] }
                  ].map((card) => (
                    <div key={card.name} className="text-center p-4 bg-background/50 rounded-lg border border-mystical-gold/10">
                      <div className="text-2xl mb-2 text-mystical-gold font-mystical">{card.number}</div>
                      <div className="font-semibold text-mystical-gold">{card.name}</div>
                      <div className="flex justify-center space-x-1 mt-2">
                        {card.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline" className="text-xs border-mystical-gold/30">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {viewMode === 'reading' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                onClick={resetReading}
                variant="ghost"
                className="hover:bg-mystical-gold/10"
              >
                ← Back to Readings
              </Button>
            </div>

            <Card className="mystical-card text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-mystical-gold font-mystical">
                  Single Card Reading
                </CardTitle>
                <CardDescription>
                  Focus on your question and draw your card
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-32 h-48 bg-gradient-to-br from-mystical-deep-purple to-mystical-dark-purple rounded-lg border-2 border-mystical-gold/30 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <Moon className="w-12 h-12 text-mystical-gold animate-pulse" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    This feature is currently under development. 
                    Soon you'll be able to draw cards and receive detailed interpretations.
                  </p>
                  
                  <Button
                    onClick={resetReading}
                    variant="outline"
                    className="border-mystical-gold/30 hover:border-mystical-gold"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Return to Options
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}