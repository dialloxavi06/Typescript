function tirets(ch: string): string {
  let res = "";

  for (let c of ch) res = res + c + "-";
  //   for (let i = 0; i < ch.length; i++) res = res + ch[i] + "-";

  return res;
}

function tiretsMk2(ch: string): string {
  let res = "";

  for (let c of ch) {
    res = res + c;
    if (c !== " ") res = res + "-";
  }

  return res;
}

function tiretsMk3(ch: string): string {
  let res = "";

  for (let i = 0; i < ch.length; i++) {
    res = res + ch[i];
    if (ch[i] !== " " && i !== ch.length - 1) res = res + "-";
  }

  return res;
}

function palindrome(ch: string): boolean {
  // ch[0] === ch[ch.length - 1 - 0]
  // ch[1] === ch[ch.length - 1 - 1]
  // ...
  // ch[i] === ch[ch.length - 1 - i]

  for (let i = 0; i < Math.floor(ch.length / 2); i++)
    if (ch[i] !== ch[ch.length - 1 - i]) return false;

  return true;
}

function miroir(ch: string): string {
  let res = "";

  // for (let c of ch) res = c + res;
  // for (let i = 0; i < ch.length; i++) res = ch[i] + res
  // for (let i = 0; i < ch.length; i++) res = res + ch[ch.length - 1 - i];
  for (let i = ch.length - 1; i >= 0; i--) res = res + ch[i];

  return res;
}

function supprimerPosition(ch: string, ind: number): string {
  let res = "";

  // Facultatif
  if (ind < 0 || ind >= ch.length) return ch;

  for (let i = 0; i < ch.length; i++) if (i !== ind) res = res + ch[i];

  return res;
}

function insérerCaractère(ch: string, ind: number, carac: string): string {
  let res = "";

  // if (ind < 0 || ind > ch.length) return ch;
  // else if (ind == ch.length) return ch + carac;

  for (let i = 0; i < ch.length; i++) {
    if (i === ind) res = res + carac;
    res += ch[i];
  }

  if (ind === ch.length) res += carac;

  return res;
}

console.log(tirets("George Timoléon est"));
