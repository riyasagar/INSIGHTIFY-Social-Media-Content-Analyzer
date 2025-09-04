export function analyzeContent(text) {
  const words = text.match(/\b\w+\b/g) || [];
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const wordCount = words.length;
  const sentenceCount = sentences.length;

  // Detect headings (Markdown or all caps lines)
  const headingRegex = /^(#{1,6}\s|[A-Z\s]{3,})$/m;
  const hasHeadings = headingRegex.test(text);

  // Long sentences (>20 words)
  const longSentences = sentences.filter(s => s.split(" ").length > 20).length;

  // Keyword frequency for top 5
  const wordFrequency = {};
  words.forEach(word => {
    const w = word.toLowerCase();
    if (w.length > 3) wordFrequency[w] = (wordFrequency[w] || 0) + 1;
  });
  const topKeywords = Object.entries(wordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word, count]) => `${word} (${count})`);

  // Readability score (simple Flesch Reading Ease approximation)
  const syllables = words.reduce((acc, w) => acc + countSyllables(w), 0);
  const readability = Math.round(206.835 - 1.015 * (sentenceCount ? wordCount / sentenceCount : 0) - 84.6 * (sentenceCount ? syllables / wordCount : 0));

  // Engagement estimate
  const engagement = Math.min(100, Math.round((wordCount / 1000) * 50 + (hasHeadings ? 25 : 0) + (topKeywords.length ? 25 : 0)));

  // Sentiment placeholder (could integrate NLP model)
  const sentiment = text.includes("good") || text.includes("great") ? "Positive" : "Neutral";

  // Dynamic suggestions
  const suggestions = [];

  // Readability suggestion
  if (readability < 50) {
    suggestions.push({ category: "Readability", advice: "The text is difficult to read. Shorten long sentences and simplify words." });
  } else if (readability < 70) {
    suggestions.push({ category: "Readability", advice: "Readability is okay, but consider breaking down long sentences for clarity." });
  } else {
    suggestions.push({ category: "Readability", advice: "Good readability. Keep the content concise and clear." });
  }

  // Engagement suggestion
  if (!hasHeadings) {
    suggestions.push({ category: "Engagement", advice: "Add headings to organize content and make it easier to scan." });
  }
  if (wordCount < 200) {
    suggestions.push({ category: "Engagement", advice: "Content is short; consider adding examples or visuals to improve engagement." });
  }

  // SEO suggestion
  if (topKeywords.length < 3) {
    suggestions.push({ category: "SEO", advice: "Few strong keywords detected. Add relevant keywords to improve SEO." });
  } else {
    suggestions.push({ category: "SEO", advice: `Top keywords used: ${topKeywords.join(", ")}` });
  }

  // Long sentences
  if (longSentences > 3) {
    suggestions.push({ category: "Grammar & Style", advice: `You have ${longSentences} long sentences; consider splitting them for clarity.` });
  }

  return {
    wordCount,
    sentenceCount,
    readability,
    engagement,
    sentiment,
    hasHeadings,
    longSentences,
    topKeywords,
    suggestions,
  };
}

function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  const vowels = word.match(/[aeiouy]{1,2}/g) || [];
  return vowels.length;
}
