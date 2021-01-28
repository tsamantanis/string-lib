const sLib = require('./index');

test('capitalize', () => {
    expect(sLib.capitalize("hello")).toBe('Hello');
    expect(sLib.capitalize("WORLD")).toBe('WORLD');
    expect(sLib.capitalize("foo bar")).toBe('Foo bar');
});

test('allCaps', () => {
    expect(sLib.allCaps("hello")).toBe('HELLO');
    expect(sLib.allCaps("WORLD")).toBe('WORLD');
    expect(sLib.allCaps("foo bar")).toBe('FOO BAR');
    expect(sLib.allCaps("What!")).toBe('WHAT!');
});

test('capitalizeWords', () => {
    expect(sLib.capitalizeWords("hello")).toBe('Hello');
    expect(sLib.capitalizeWords("WORLD")).toBe('WORLD');
    expect(sLib.capitalizeWords("foo bar")).toBe('Foo Bar');
});

test('capitalizeHeadline', () => {
    expect(sLib.capitalizeHeadline("hello")).toBe('Hello');
    expect(sLib.capitalizeHeadline("WORLD")).toBe('WORLD');
    expect(sLib.capitalizeHeadline("foo bar")).toBe('Foo Bar');
    expect(sLib.capitalizeHeadline("this is a headline")).toBe('This Is a Headline');
});

test('removeExtraSpaces', () => {
    expect(sLib.removeExtraSpaces("hello   ")).toBe('hello');
    expect(sLib.removeExtraSpaces("WORLD")).toBe('WORLD');
    expect(sLib.removeExtraSpaces("  foo   bar  ")).toBe('foo bar');
    expect(sLib.removeExtraSpaces("  What!"  )).toBe('What!');
})

test('kabobCase', () => {
    expect(sLib.kabobCase("hello world")).toBe('hello-world');
    expect(sLib.kabobCase("HELLO WORLD")).toBe('hello-world');
    expect(sLib.kabobCase("Foo Bar")).toBe('foo-bar');
    expect(sLib.kabobCase("What! is this#")).toBe('what-is-this');
})

test('snakeCase', () => {
    expect(sLib.snakeCase("hello world")).toBe('hello_world');
    expect(sLib.snakeCase("HELLO WORLD")).toBe('hello_world');
    expect(sLib.snakeCase("Foo Bar")).toBe('foo_bar');
    expect(sLib.snakeCase("What! is this#")).toBe('what_is_this');
})

test('camelCase', () => {
    expect(sLib.camelCase("hello world")).toBe('helloWorld');
    expect(sLib.camelCase("HELLO WORLD")).toBe('helloWorld');
    expect(sLib.camelCase("Foo Bar")).toBe('fooBar');
    expect(sLib.camelCase("What! is this#")).toBe('whatIsThis');
})

test('shift', () => {
    expect(sLib.shift("hello world", 3)).toBe('lo worldhel');
    expect(sLib.shift("HELLO WORLD", 2)).toBe('LLO WORLDHE');
    expect(sLib.shift("Foo Bar", 0)).toBe('Foo Bar');
    expect(sLib.shift("What! is this#", 16)).toBe('What! is this#');
})
