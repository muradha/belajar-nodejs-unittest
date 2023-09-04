test("test toBe", function () {
    const name = "Rizki";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Rizki');
})

test("test toEqual", () => {
    let person = {id: "rizki"};
    Object.assign(person, {name: "rizki"});

    expect(person).toEqual({id: "rizki", name: "eko"})
});