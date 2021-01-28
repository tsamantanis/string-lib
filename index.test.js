const sLib = require('./index');

test('capitalize', () => {
    expect(sLib.capitalize("hello")).toBe('Hello');
    expect(sLib.capitalize("WORLD")).toBe('WORLD');
    expect(sLib.capitalize("foo bar")).toBe('Foo bar');
});

test('capitalize prototype', () => {
    expect("hello".capitalize()).toBe('Hello');
    expect("WORLD".capitalize()).toBe('WORLD');
    expect("foo bar".capitalize()).toBe('Foo bar');
});

test('allCaps', () => {
    expect(sLib.allCaps("hello")).toBe('HELLO');
    expect(sLib.allCaps("WORLD")).toBe('WORLD');
    expect(sLib.allCaps("foo bar")).toBe('FOO BAR');
    expect(sLib.allCaps("What!")).toBe('WHAT!');
});

test('allCaps prototype', () => {
    expect("hello".allCaps()).toBe('HELLO');
    expect("WORLD".allCaps()).toBe('WORLD');
    expect("foo bar".allCaps()).toBe('FOO BAR');
    expect("What!".allCaps()).toBe('WHAT!');
});

test('capitalizeWords', () => {
    expect(sLib.capitalizeWords("hello")).toBe('Hello');
    expect(sLib.capitalizeWords("WORLD")).toBe('WORLD');
    expect(sLib.capitalizeWords("foo bar")).toBe('Foo Bar');
});

test('capitalizeWords prototype', () => {
    expect("hello".capitalizeWords()).toBe('Hello');
    expect("WORLD".capitalizeWords()).toBe('WORLD');
    expect("foo bar".capitalizeWords()).toBe('Foo Bar');
});

test('capitalizeHeadline', () => {
    expect(sLib.capitalizeHeadline("hello")).toBe('Hello');
    expect(sLib.capitalizeHeadline("WORLD")).toBe('WORLD');
    expect(sLib.capitalizeHeadline("foo bar")).toBe('Foo Bar');
    expect(sLib.capitalizeHeadline("this is a headline")).toBe('This Is a Headline');
});

test('capitalizeHeadline prototype', () => {
    expect("hello".capitalizeHeadline()).toBe('Hello');
    expect("WORLD".capitalizeHeadline()).toBe('WORLD');
    expect("foo bar".capitalizeHeadline()).toBe('Foo Bar');
    expect("this is a headline".capitalizeHeadline()).toBe('This Is a Headline');
});

test('isEmpty', () => {
    expect(sLib.isEmpty("hello")).toBe(false);
    expect(sLib.isEmpty("\n")).toBe(true);
    expect(sLib.isEmpty("\nworld")).toBe(false);
    expect(sLib.isEmpty("\n\r")).toBe(true);
});

test('removeExtraSpaces', () => {
    expect(sLib.removeExtraSpaces("hello   ")).toBe('hello');
    expect(sLib.removeExtraSpaces("WORLD")).toBe('WORLD');
    expect(sLib.removeExtraSpaces("  foo   bar  ")).toBe('foo bar');
    expect(sLib.removeExtraSpaces("  What!"  )).toBe('What!');
});

test('removeExtraSpaces prototype', () => {
    expect("hello   ".removeExtraSpaces()).toBe('hello');
    expect("WORLD".removeExtraSpaces()).toBe('WORLD');
    expect("  foo   bar  ".removeExtraSpaces()).toBe('foo bar');
    expect("  What!".removeExtraSpaces()).toBe('What!');
});

test('kabobCase', () => {
    expect(sLib.kabobCase("hello world")).toBe('hello-world');
    expect(sLib.kabobCase("HELLO WORLD")).toBe('hello-world');
    expect(sLib.kabobCase("Foo Bar")).toBe('foo-bar');
    expect(sLib.kabobCase("What! is this#")).toBe('what-is-this');
});

test('kabobCase prototype', () => {
    expect("hello world".kabobCase()).toBe('hello-world');
    expect("HELLO WORLD".kabobCase()).toBe('hello-world');
    expect("Foo Bar".kabobCase()).toBe('foo-bar');
    expect("What! is this#".kabobCase()).toBe('what-is-this');
})

test('snakeCase', () => {
    expect(sLib.snakeCase("hello world")).toBe('hello_world');
    expect(sLib.snakeCase("HELLO WORLD")).toBe('hello_world');
    expect(sLib.snakeCase("Foo Bar")).toBe('foo_bar');
    expect(sLib.snakeCase("What! is this#")).toBe('what_is_this');
});

test('snakeCase prototype', () => {
    expect("hello world".snakeCase()).toBe('hello_world');
    expect("HELLO WORLD".snakeCase()).toBe('hello_world');
    expect("Foo Bar".snakeCase()).toBe('foo_bar');
    expect("What! is this#".snakeCase()).toBe('what_is_this');
});

test('camelCase', () => {
    expect(sLib.camelCase("hello world")).toBe('helloWorld');
    expect(sLib.camelCase("HELLO WORLD")).toBe('helloWorld');
    expect(sLib.camelCase("Foo Bar")).toBe('fooBar');
    expect(sLib.camelCase("What! is this#")).toBe('whatIsThis');
});

test('camelCase prototype', () => {
    expect("hello world".camelCase()).toBe('helloWorld');
    expect("HELLO WORLD".camelCase()).toBe('helloWorld');
    expect("Foo Bar".camelCase()).toBe('fooBar');
    expect("What! is this#".camelCase()).toBe('whatIsThis');
});

test('shift', () => {
    expect(sLib.shift("hello world", 3)).toBe('lo worldhel');
    expect(sLib.shift("HELLO WORLD", 2)).toBe('LLO WORLDHE');
    expect(sLib.shift("Foo Bar", 0)).toBe('Foo Bar');
    expect(sLib.shift("What! is this#", 16)).toBe('What! is this#');
});

test('oddCaps', () => {
    expect(sLib.oddCaps("hello")).toBe('HeLlO');
    expect(sLib.oddCaps("WORLD")).toBe('WoRlD');
    expect(sLib.oddCaps("hello world")).toBe('HeLlO WoRlD');
    expect(sLib.oddCaps("foo bar")).toBe('FoO BaR');
});

test('oddCaps prototype', () => {
    expect("hello".oddCaps()).toBe('HeLlO');
    expect("WORLD".oddCaps()).toBe('WoRlD');
    expect("hello world".oddCaps()).toBe('HeLlO WoRlD');
    expect("foo bar".oddCaps()).toBe('FoO BaR');
});

test('evenCaps', () => {
    expect(sLib.evenCaps("hello")).toBe('hElLo');
    expect(sLib.evenCaps("WORLD")).toBe('wOrLd');
    expect(sLib.evenCaps("foo bar")).toBe('fOo bAr');
});

test('evenCaps prototype', () => {
    expect("hello".evenCaps()).toBe('hElLo');
    expect("WORLD".evenCaps()).toBe('wOrLd');
    expect("foo bar".evenCaps()).toBe('fOo bAr');
});
