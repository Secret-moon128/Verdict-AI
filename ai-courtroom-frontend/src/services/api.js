export async function analyzeCase(caseText) {

  const response = await fetch("http://20.205.56.4:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      case_facts: caseText
    })
  });

  const data = await response.json();

  return data;

}