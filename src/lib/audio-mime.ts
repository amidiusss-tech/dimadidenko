/** Guess MIME for `<audio><source type>` from URL path (query stripped). */
export function guessAudioMimeType(src: string): string | undefined {
  const path = src.split("?")[0]?.toLowerCase() ?? "";
  if (path.endsWith(".wav")) return "audio/wav";
  if (path.endsWith(".mp3")) return "audio/mpeg";
  if (path.endsWith(".m4a") || path.endsWith(".aac")) return "audio/mp4";
  if (path.endsWith(".ogg") || path.endsWith(".oga")) return "audio/ogg";
  if (path.endsWith(".flac")) return "audio/flac";
  if (path.endsWith(".opus")) return "audio/opus";
  if (path.endsWith(".webm")) return "audio/webm";
  return undefined;
}
