
import { Tool, CategoryType } from './types';

export const CATEGORIES: CategoryType[] = [
  'Social Media & Content',
  'Language & Writing',
  'Study & Student'
];

export const TOOLS: Tool[] = [
  // Social Media & Content
  {
    id: 'instagram-caption',
    name: 'Instagram Caption Generator',
    description: 'Create engaging and viral captions for your posts.',
    category: 'Social Media & Content',
    icon: '📸',
    placeholder: 'Tell me what your photo is about...',
    systemPrompt: 'You are an Instagram marketing expert. Generate 3 creative, engaging captions for a post based on the user description. Include relevant emojis and 5-10 hashtags.'
  },
  {
    id: 'instagram-hashtag',
    name: 'Instagram Hashtag Generator',
    description: 'Find the best hashtags to boost your reach.',
    category: 'Social Media & Content',
    icon: '#️⃣',
    placeholder: 'Enter your niche or post topic...',
    systemPrompt: 'Generate a list of 30 highly relevant Instagram hashtags for the given niche. Categorize them into High Reach, Medium Reach, and Low Reach/Niche specific.'
  },
  {
    id: 'youtube-title',
    name: 'YouTube Title Generator',
    description: 'Click-worthy titles for your next video.',
    category: 'Social Media & Content',
    icon: '🎬',
    placeholder: 'What is your video about?',
    systemPrompt: 'Generate 5 catchy, SEO-friendly YouTube titles that maximize click-through rate (CTR) based on the input.'
  },
  {
    id: 'youtube-description',
    name: 'YouTube Description Generator',
    description: 'Professional and SEO-optimized descriptions.',
    category: 'Social Media & Content',
    icon: '📝',
    placeholder: 'Summarize your video contents...',
    systemPrompt: 'Write a comprehensive YouTube description including a summary, timestamps placeholders, call-to-action, and relevant keywords.'
  },
  {
    id: 'youtube-tag',
    name: 'YouTube Tag Generator',
    description: 'Improve search rankings with perfect tags.',
    category: 'Social Media & Content',
    icon: '🏷️',
    placeholder: 'Enter video topic...',
    systemPrompt: 'Provide a list of 20 high-ranking YouTube tags separated by commas for the given video topic.'
  },
  {
    id: 'reel-hook',
    name: 'Reel Hook Generator',
    description: 'Stop the scroll with powerful opening lines.',
    category: 'Social Media & Content',
    icon: '🪝',
    placeholder: 'What is the value of your Reel?',
    systemPrompt: 'Create 5 scroll-stopping hooks for an Instagram Reel or TikTok based on the topic. Focus on curiosity, benefit, or controversy.'
  },
  {
    id: 'viral-content-idea',
    name: 'Viral Content Idea Generator',
    description: 'Never run out of ideas for your feed.',
    category: 'Social Media & Content',
    icon: '💡',
    placeholder: 'Your niche (e.g., Coding, Fitness)...',
    systemPrompt: 'Generate 10 viral content ideas for a creator in the specified niche. Include a mix of educational, entertaining, and relatable topics.'
  },
  {
    id: 'bio-generator',
    name: 'Bio Generator',
    description: 'Professional bios for Social Media.',
    category: 'Social Media & Content',
    icon: '👤',
    placeholder: 'Tell me about yourself/brand...',
    systemPrompt: 'Generate 3 different Social Media bios (Professional, Creative, Minimalist) based on the user details. Max 150 characters each.'
  },

  // Language & Writing
  {
    id: 'global-translator',
    name: 'Global Translator',
    description: 'Translate text into any language accurately.',
    category: 'Language & Writing',
    icon: '🌐',
    placeholder: 'Text to translate (specify target language)...',
    systemPrompt: 'Translate the following text into the specified language. Ensure the tone and context remain natural and professional.'
  },
  {
    id: 'grammar-checker',
    name: 'Grammar Checker Tool',
    description: 'Fix grammatical errors instantly.',
    category: 'Language & Writing',
    icon: '✍️',
    placeholder: 'Paste your text here...',
    systemPrompt: 'Check the following text for grammatical errors. Provide the corrected version and a brief list of improvements made.'
  },
  {
    id: 'sentence-corrector',
    name: 'Sentence Corrector Tool',
    description: 'Improve flow and structure of sentences.',
    category: 'Language & Writing',
    icon: '📏',
    placeholder: 'Enter a sentence to improve...',
    systemPrompt: 'Analyze the given sentence and rewrite it for better clarity, flow, and impact while maintaining the original meaning.'
  },
  {
    id: 'paragraph-rewriter',
    name: 'English Paragraph Rewriter',
    description: 'Rewrite paragraphs without changing meaning.',
    category: 'Language & Writing',
    icon: '♻️',
    placeholder: 'Paste paragraph to rewrite...',
    systemPrompt: 'Rewrite the following paragraph to be more engaging and unique. Offer 2 variations: Professional and Casual.'
  },
  {
    id: 'synonym-finder',
    name: 'Synonym Finder Tool',
    description: 'Find better alternatives for common words.',
    category: 'Language & Writing',
    icon: '📖',
    placeholder: 'Enter a word...',
    systemPrompt: 'Provide a list of 10 synonyms for the given word, categorized by context (e.g., Formal, Informal).'
  },
  {
    id: 'antonym-finder',
    name: 'Antonym Finder Tool',
    description: 'Find opposite words quickly.',
    category: 'Language & Writing',
    icon: '↔️',
    placeholder: 'Enter a word...',
    systemPrompt: 'Provide a list of 5 antonyms for the given word.'
  },
  {
    id: 'active-to-passive',
    name: 'Active to Passive Voice Converter',
    description: 'Switch sentence focus to the receiver.',
    category: 'Language & Writing',
    icon: '🔄',
    placeholder: 'Enter active voice sentence...',
    systemPrompt: 'Convert the following active voice sentence into passive voice.'
  },
  {
    id: 'passive-to-active',
    name: 'Passive to Active Voice Converter',
    description: 'Make sentences more direct and strong.',
    category: 'Language & Writing',
    icon: '🔃',
    placeholder: 'Enter passive voice sentence...',
    systemPrompt: 'Convert the following passive voice sentence into active voice.'
  },
  {
    id: 'tense-converter',
    name: 'Tense Converter Tool',
    description: 'Change the tense of any text.',
    category: 'Language & Writing',
    icon: '⏳',
    placeholder: 'Enter text and target tense...',
    systemPrompt: 'Convert the provided text into the target tense specified by the user.'
  },
  {
    id: 'vocabulary-builder',
    name: 'Vocabulary Builder Tool',
    description: 'Learn new words related to any topic.',
    category: 'Language & Writing',
    icon: '📚',
    placeholder: 'Topic (e.g., Technology, Business)...',
    systemPrompt: 'Provide 10 advanced vocabulary words related to the given topic. Include meanings and example sentences for each.'
  },
  {
    id: 'daily-english-practice',
    name: 'Daily English Practice Generator',
    description: 'Get custom exercises for daily improvement.',
    category: 'Language & Writing',
    icon: '🗓️',
    placeholder: 'Your current level (Beginner/Intermediate)...',
    systemPrompt: 'Create a short daily practice plan (reading, writing, and speaking exercises) for someone at the specified English level.'
  },

  // Study & Student
  {
    id: 'mcq-generator',
    name: 'MCQ Generator from Text',
    description: 'Generate multiple-choice questions from any text.',
    category: 'Study & Student',
    icon: '📝',
    placeholder: 'Paste educational content...',
    systemPrompt: 'Generate 5 Multiple Choice Questions (MCQs) from the provided text. Include 4 options and the correct answer for each.'
  },
  {
    id: 'question-to-mcqs',
    name: 'Question to Multiple MCQs',
    description: 'Turn single questions into multiple variants.',
    category: 'Study & Student',
    icon: '❓',
    placeholder: 'Enter a single question...',
    systemPrompt: 'Take the given question and generate 3 similar MCQs that test the same underlying concept.'
  },
  {
    id: 'quiz-generator',
    name: 'Quiz Generator Tool',
    description: 'Create comprehensive quizzes for any topic.',
    category: 'Study & Student',
    icon: '🎓',
    placeholder: 'Topic for the quiz...',
    systemPrompt: 'Generate a 10-question quiz on the given topic. Include a mix of True/False and MCQs, with an answer key at the end.'
  },
  {
    id: 'notes-generator',
    name: 'Notes Generator from Paragraph',
    description: 'Convert paragraphs into structured notes.',
    category: 'Study & Student',
    icon: '🗒️',
    placeholder: 'Paste text to summarize into notes...',
    systemPrompt: 'Transform the following text into well-structured, bulleted study notes. Focus on key terms and main concepts.'
  },
  {
    id: 'text-summarizer',
    name: 'Text Summarizer for Students',
    description: 'Quickly summarize long study materials.',
    category: 'Study & Student',
    icon: '✂️',
    placeholder: 'Paste long text here...',
    systemPrompt: 'Summarize the provided text into a concise paragraph followed by 3 key takeaways. Ideal for quick revision.'
  },
  {
    id: 'study-timetable',
    name: 'Study Time Table Generator',
    description: 'Custom study schedules for better planning.',
    category: 'Study & Student',
    icon: '📅',
    placeholder: 'Subjects and daily available hours...',
    systemPrompt: 'Create a realistic daily study timetable based on the subjects and hours provided. Include breaks and focused sessions.'
  },
  {
    id: 'exam-revision-maker',
    name: 'Exam Revision Question Maker',
    description: 'Generate questions to test your exam readiness.',
    category: 'Study & Student',
    icon: '✍️',
    placeholder: 'Subject or Chapter topic...',
    systemPrompt: 'Generate 5 high-probability exam questions (Short & Long answer types) for the given topic.'
  },
  {
    id: 'homework-helper',
    name: 'Homework Helper',
    description: 'Step-by-step explanations for your problems.',
    category: 'Study & Student',
    icon: '🙋',
    placeholder: 'Question or Problem...',
    systemPrompt: 'Provide a step-by-step explanation and solution for the given homework problem. Do not just give the answer; explain the reasoning.'
  },
  {
    id: 'important-questions',
    name: 'Important Questions Generator',
    description: 'Identify the most likely questions for your topics.',
    category: 'Study & Student',
    icon: '🌟',
    placeholder: 'Topic name...',
    systemPrompt: 'Based on standard academic curricula, list 10 important questions that students should prepare for the given topic.'
  },
  {
    id: 'practice-question',
    name: 'Practice Question Generator',
    description: 'Unlimited practice problems for any subject.',
    category: 'Study & Student',
    icon: '✏️',
    placeholder: 'Topic or Concept...',
    systemPrompt: 'Generate 5 diverse practice questions to help a student master the specified concept.'
  }
];
