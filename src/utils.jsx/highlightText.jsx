// export  function highlightText(text, query) {
//   if (!query) return text;

//   const regex = new RegExp(`(${query})`, "gi");
//   const parts = text.split(regex);

//   return parts.map((part, i) =>
//     part.toLowerCase() === query.toLowerCase() ? (
//       <mark key={i} style={{ backgroundColor: "yellow" }}>
//         {part}
//       </mark>
//     ) : (
//       part
//     )
//   );
// }
export function highlightText(text, query) {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const result = [];

  let startIndex = 0;
  let matchIndex;

  while ((matchIndex = lowerText.indexOf(lowerQuery, startIndex)) !== -1) {
    if (matchIndex > startIndex) {
      // Добавляем часть текста до совпадения
      result.push(text.slice(startIndex, matchIndex));
    }

    // Добавляем совпавшую часть, обернутую в <mark>
    result.push(
      <mark key={matchIndex} style={{ backgroundColor: "yellow" }}>
        {text.slice(matchIndex, matchIndex + query.length)}
      </mark>
    );

    startIndex = matchIndex + query.length;
  }

  // Добавляем оставшийся текст после последнего совпадения
  if (startIndex < text.length) {
    result.push(text.slice(startIndex));
  }

  return result;
}
