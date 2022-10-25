describe("Testing of the Search Function", () => {
    test('The search returns apple which will bring values', async () => {
        const name = "apple"
        const data = await fetch(
            `https://sdpfoodspy.herokuapp.com/api/products/search/${name}`
        );
        const items = await data.json();
        expect(items.length).toBeGreaterThan(1);
      })
      test('The search returns callum which will not bring any values', async () => {
        const name = "callum"
        const data = await fetch(
            `https://sdpfoodspy.herokuapp.com/api/products/search/${name}`
        );
        const items = await data.json();
        expect(items.length).toBeGreaterThan(1);
      })
})
