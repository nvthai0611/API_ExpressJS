npm install axios
npm install @mui/material @emotion/react @emotion/styled axios
languageClasses=org.languagetool.language.it.Italian
languageClasses=org.languagetool.language.pl.Polish
languageClasses=org.languagetool.language.en.English,org.languagetool.language.en.AmericanEnglish


# setup thư mục Redux
public List<RuleMatch> check(AnnotatedText annotatedText,
                             boolean tokenizeText,
                             JLanguageTool.ParagraphHandling paraMode)
                      throws IOException
The main check method. Tokenizes the text into sentences and matches these sentences against all currently active rules.
Parameters:
annotatedText - The text to be checked, created with AnnotatedTextBuilder. Call this method with the complete text to be checked. If you call it repeatedly with smaller chunks like paragraphs or sentence, those rules that work across paragraphs/sentences won't work (their status gets reset whenever this method is called).
tokenizeText - If true, then the text is tokenized into sentences. Otherwise, it is assumed it's already tokenized, i.e. it is only one sentence
paraMode - Uses paragraph-level rules only if true.
Returns:
a List of RuleMatch objects, describing potential errors in the text
Throws:
IOException
Since:
2.3
public List<RuleMatch> check(AnnotatedText annotatedText,
                             boolean tokenizeText,
                             JLanguageTool.ParagraphHandling paraMode,
                             RuleMatchListener listener)
                      throws IOException
The main check method. Tokenizes the text into sentences and matches these sentences against all currently active rules.
Throws:
IOException
Since:
3.7
public List<RuleMatch> check(AnnotatedText annotatedText,
                             boolean tokenizeText,
                             JLanguageTool.ParagraphHandling paraMode,
                             RuleMatchListener listener,
                             JLanguageTool.Mode mode,
                             JLanguageTool.Level level)
                      throws IOException
The main check method. Tokenizes the text into sentences and matches these sentences against all currently active rules depending on mode.
Throws:
IOException
Since:
4.3
public List<RuleMatch> check(AnnotatedText annotatedText,
                             boolean tokenizeText,
                             JLanguageTool.ParagraphHandling paraMode,
                             RuleMatchListener listener,
                             JLanguageTool.Mode mode,
                             JLanguageTool.Level level,
                             @Nullable
                             Long textSessionID)
                      throws IOException
The main check method. Tokenizes the text into sentences and matches these sentences against all currently active rules depending on mode.
Parameters:
textSessionID - UserConfig.getTextSessionID can be outdated because of pipeline pool caching, so pass through directly
Throws:
IOException
Since:
5.2
public CheckResults check2(AnnotatedText annotatedText,
                           boolean tokenizeText,
                           JLanguageTool.ParagraphHandling paraMode,
                           RuleMatchListener listener,
                           JLanguageTool.Mode mode,
                           JLanguageTool.Level level,
                           @Nullable
                           Long textSessionID)
                    throws IOException
Throws:
IOException

public CheckResults check2(AnnotatedText annotatedText,
                           boolean tokenizeText,
                           JLanguageTool.ParagraphHandling paraMode,
                           RuleMatchListener listener,
                           JLanguageTool.Mode mode,
                           JLanguageTool.Level level,
                           @NotNull
                           Set<ToneTag> toneTags,
                           @Nullable
                           Long textSessionID)
                    throws IOException
Throws:
IOException
protected CheckResults checkInternal(AnnotatedText annotatedText,
                                     JLanguageTool.ParagraphHandling paraMode,
                                     RuleMatchListener listener,
                                     JLanguageTool.Mode mode,
                                     JLanguageTool.Level level,
                                     @Nullable
                                     Long textSessionID,
                                     List<String> sentences,
                                     List<AnalyzedSentence> analyzedSentences)
                              throws IOException
Throws:
IOException

CommandLineTools.checkBitext(BitextReader reader, JLanguageTool srcLt, JLanguageTool trgLt, List<BitextRule> bRules)
Checks the bilingual input (bitext) and displays the output (considering the target language) in API format or in the simple text format.
static int	CommandLineTools.checkText(String contents, JLanguageTool lt) 
static int	CommandLineTools.checkText(String contents, JLanguageTool lt, boolean isJsonFormat, int lineOffset) 
static int	CommandLineTools.checkText(String contents, JLanguageTool lt, boolean isJsonFormat, int contextSize, int lineOffset, int prevMatches, StringTools.ApiPrintMode apiMode, boolean listUnknownWords, JLanguageTool.Level level, List<String> unknownWords, boolean verbose)
Check the given text and print results to System.out.
static int	CommandLineTools.checkText(String contents, JLanguageTool lt, boolean isJsonFormat, int lineOffset, JLanguageTool.Level level, boolean listUnknownWords) 
static int	CommandLineTools.checkText(String contents, JLanguageTool lt, boolean isJsonFormat, int lineOffset, JLanguageTool.Level level, boolean listUnknownWords, boolean verbose) 
static void	CommandLineTools.correctBitext(BitextReader reader, JLanguageTool sourceLt, JLanguageTool targetLt, List<BitextRule> bRules)
Automatically applies suggestions to the bilingual text.
static void	CommandLineTools.profileRulesOnText(String contents, JLanguageTool lt)
Simple rule profiler - used to run LT on a corpus to see which rule takes most time.
static void	CommandLineTools.tagText(String contents, JLanguageTool lt)
Tags text using the LanguageTool tagger, printing results to System.out.