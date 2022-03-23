test("fetch call", async () => {
  const res = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
     continents {
        name
        code
       }
     }
    `,
    }),
  });
  const result = await res.json();
  expect(result.data.continents[0].name).toBe("Africa");
});
