export const pythonQuestions = [
  // O'zgaruvchilar (1-15)
  {
    id: 1,
    category: "O'zgaruvchilar",
    type: "closed",
    question: "JavaScript'da o'zgaruvchi e'lon qilish uchun qanday kalit so'zlar ishlatiladi?",
    options: ["A) var, let, const", "B) variable, let, constant", "C) var, define, const", "D) let, define, variable"],
    correctAnswer: "A) var, let, const",
  },
  {
    id: 2,
    category: "O'zgaruvchilar",
    type: "closed",
    question: "const bilan e'lon qilingan o'zgaruvchi nima xususiyatiga ega?",
    options: [
      "A) Qayta e'lon qilish mumkin",
      "B) Qiymatini o'zgartirish mumkin emas",
      "C) Faqat raqamli qiymat oladi",
      "D) Global ko'rinishga ega",
    ],
    correctAnswer: "B) Qiymatini o'zgartirish mumkin emas",
  },
  {
    id: 3,
    category: "O'zgaruvchilar",
    type: "closed",
    question: "let va var orasidagi asosiy farq nima?",
    options: [
      "A) let global ko'rinishga ega",
      "B) var block ko'rinishga ega",
      "C) let block ko'rinishga ega",
      "D) Hech qanday farq yo'q",
    ],
    correctAnswer: "C) let block ko'rinishga ega",
  },

  // Ma'lumot turlari (4-8)
  {
    id: 4,
    category: "Ma'lumot turlari",
    type: "closed",
    question: "JavaScript'da qancha primitiv ma'lumot turlari mavjud?",
    options: ["A) 5 ta", "B) 6 ta", "C) 7 ta", "D) 8 ta"],
    correctAnswer: "C) 7 ta",
  },
  {
    id: 5,
    category: "Ma'lumot turlari",
    type: "closed",
    question: "typeof operatori qaysi ma'lumot turini aniqlash uchun ishlatiladi?",
    options: [
      "A) Faqat raqamlar uchun",
      "B) Barcha ma'lumot turlari uchun",
      "C) Faqat string lar uchun",
      "D) Faqat object lar uchun",
    ],
    correctAnswer: "B) Barcha ma'lumot turlari uchun",
  },

  // Stringlar (6-12)
  {
    id: 6,
    category: "Stringlar",
    type: "closed",
    question: "String'ni katta harflarga o'tkazish uchun qaysi metod ishlatiladi?",
    options: ["A) toUpperCase()", "B) upperCase()", "C) toUpper()", "D) makeUpper()"],
    correctAnswer: "A) toUpperCase()",
  },
  {
    id: 7,
    category: "Stringlar",
    type: "closed",
    question: "String'ni bo'laklarga ajratish uchun qaysi metod ishlatiladi?",
    options: ["A) divide()", "B) split()", "C) separate()", "D) break()"],
    correctAnswer: "B) split()",
  },
  {
    id: 8,
    category: "Stringlar",
    type: "closed",
    question: "String'ning uzunligini aniqlash uchun qaysi xususiyat ishlatiladi?",
    options: ["A) size", "B) count", "C) length", "D) len"],
    correctAnswer: "C) length",
  },
  {
    id: 9,
    category: "Stringlar",
    type: "closed",
    question: "String'ning boshi va oxiridagi bo'sh joylarni olib tashlash uchun qaysi metod ishlatiladi?",
    options: ["A) clean()", "B) trim()", "C) strip()", "D) remove()"],
    correctAnswer: "B) trim()",
  },

  // Arraylar (10-18)
  {
    id: 10,
    category: "Arraylar",
    type: "closed",
    question: "Array yaratishning to'g'ri usuli qaysi?",
    options: ["A) let arr = (1, 2, 3)", "B) let arr = [1, 2, 3]", "C) let arr = {1, 2, 3}", "D) let arr = <1, 2, 3>"],
    correctAnswer: "B) let arr = [1, 2, 3]",
  },
  {
    id: 11,
    category: "Arraylar",
    type: "closed",
    question: "Array'ning oxiriga element qo'shish uchun qaysi metod ishlatiladi?",
    options: ["A) add()", "B) append()", "C) push()", "D) insert()"],
    correctAnswer: "C) push()",
  },
  {
    id: 12,
    category: "Arraylar",
    type: "closed",
    question: "Array'ning birinchi elementini olib tashlash uchun qaysi metod ishlatiladi?",
    options: ["A) removeFirst()", "B) shift()", "C) pop()", "D) delete()"],
    correctAnswer: "B) shift()",
  },

  // Shartli operatorlar (13-20)
  {
    id: 13,
    category: "Shartli operatorlar",
    type: "closed",
    question: "if-else konstruksiyasining to'g'ri sintaksisi qaysi?",
    options: [
      "A) if (shart) { } else { }",
      "B) if shart { } else { }",
      "C) if (shart) then { } else { }",
      "D) if shart then { } else { }",
    ],
    correctAnswer: "A) if (shart) { } else { }",
  },
  {
    id: 14,
    category: "Shartli operatorlar",
    type: "closed",
    question: "Bir nechta shartlarni tekshirish uchun qaysi operator ishlatiladi?",
    options: ["A) else if", "B) elif", "C) elseif", "D) ifelse"],
    correctAnswer: "A) else if",
  },
  {
    id: 15,
    category: "Shartli operatorlar",
    type: "closed",
    question: "Ternary operator qanday yoziladi?",
    options: [
      "A) shart ? true_qiymat : false_qiymat",
      "B) shart : true_qiymat ? false_qiymat",
      "C) shart if true_qiymat else false_qiymat",
      "D) if shart true_qiymat else false_qiymat",
    ],
    correctAnswer: "A) shart ? true_qiymat : false_qiymat",
  },

  // Sikllar (16-25)
  {
    id: 16,
    category: "Sikllar",
    type: "closed",
    question: "For sikli qanday yoziladi?",
    options: ["A) for (i = 0; i < 10; i++)", "B) for i = 0 to 10", "C) for (i in 0..10)", "D) for i from 0 to 10"],
    correctAnswer: "A) for (i = 0; i < 10; i++)",
  },
  {
    id: 17,
    category: "Sikllar",
    type: "closed",
    question: "While sikli qachon to'xtaydi?",
    options: [
      "A) Shart true bo'lganda",
      "B) Shart false bo'lganda",
      "C) 10 marta ishlaganda",
      "D) Hech qachon to'xtamaydi",
    ],
    correctAnswer: "B) Shart false bo'lganda",
  },
  {
    id: 18,
    category: "Sikllar",
    type: "closed",
    question: "Array elementlarini aylanish uchun eng qulay usul qaysi?",
    options: ["A) for...in", "B) for...of", "C) while", "D) do...while"],
    correctAnswer: "B) for...of",
  },

  // Funksiyalar (19-30)
  {
    id: 19,
    category: "Funksiyalar",
    type: "closed",
    question: "Funksiya e'lon qilishning to'g'ri usuli qaysi?",
    options: ["A) function myFunc() { }", "B) def myFunc() { }", "C) func myFunc() { }", "D) method myFunc() { }"],
    correctAnswer: "A) function myFunc() { }",
  },
  {
    id: 20,
    category: "Funksiyalar",
    type: "closed",
    question: "Arrow function qanday yoziladi?",
    options: ["A) => function() { }", "B) () => { }", "C) function => () { }", "D) arrow () { }"],
    correctAnswer: "B) () => { }",
  },
  {
    id: 21,
    category: "Funksiyalar",
    type: "closed",
    question: "Funksiyadan qiymat qaytarish uchun qaysi kalit so'z ishlatiladi?",
    options: ["A) give", "B) send", "C) return", "D) output"],
    correctAnswer: "C) return",
  },

  // Kod natijasini topish savollari
  {
    id: 22,
    category: "Kod natijasi",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet x = 5;\nlet y = '5';\nconsole.log(x == y);",
    options: ["A) true", "B) false", "C) undefined", "D) error"],
    correctAnswer: "A) true",
  },
  {
    id: 23,
    category: "Kod natijasi",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);",
    options: ["A) 3", "B) 4", "C) 5", "D) undefined"],
    correctAnswer: "B) 4",
  },
  {
    id: 24,
    category: "Kod natijasi",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nfor(let i = 0; i < 3; i++) {\n  if(i === 1) continue;\n  console.log(i);\n}",
    options: ["A) 0 1 2", "B) 0 2", "C) 1 2", "D) 0 1"],
    correctAnswer: "B) 0 2",
  },
  {
    id: 25,
    category: "Kod natijasi",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nfunction test() {\n  return 'Hello';\n  return 'World';\n}\nconsole.log(test());",
    options: ["A) Hello World", "B) World", "C) Hello", "D) undefined"],
    correctAnswer: "C) Hello",
  },

  // String metodlari kod natijasi savollari
  {
    id: 26,
    category: "Kod natijasi - String metodlari",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet str = 'hello word        ';\nconsole.log(str.toUpperCase());",
    options: ["A) HELLO WORD        ", "B) hello word", "C) HELLO WORD", "D) Hello Word        "],
    correctAnswer: "A) HELLO WORD        ",
  },
  {
    id: 27,
    category: "Kod natijasi - String metodlari",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet str = 'hello word        ';\nconsole.log(str.split('w'));",
    options: [
      "A) ['hello', 'ord        ']",
      "B) ['hello ', 'ord        ']",
      "C) ['hello', ' ord        ']",
      "D) 'hello ord        '",
    ],
    correctAnswer: "B) ['hello ', 'ord        ']",
  },
  {
    id: 28,
    category: "Kod natijasi - String metodlari",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet str = 'hello word        ';\nconsole.log(str.trim());",
    options: ["A) 'hello word        '", "B) 'hello word'", "C) 'helloword'", "D) '        hello word'"],
    correctAnswer: "B) 'hello word'",
  },
  {
    id: 29,
    category: "Kod natijasi - String metodlari",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet str = 'hello word        ';\nconsole.log(str.indexOf('l'));",
    options: ["A) 2", "B) 3", "C) 1", "D) 0"],
    correctAnswer: "A) 2",
  },
  {
    id: 30,
    category: "Kod natijasi - String metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet str = 'hello word        ';\nconsole.log(str.endsWith('       '));",
    options: ["A) true", "B) false", "C) undefined", "D) error"],
    correctAnswer: "A) true",
  },

  // OOP - Klasslar va Obyektlar (31-45)
  {
    id: 31,
    category: "OOP - Klasslar",
    type: "closed",
    question: "JavaScript'da klass yaratish uchun qaysi kalit so'z ishlatiladi?",
    options: ["A) class", "B) Class", "C) object", "D) function"],
    correctAnswer: "A) class",
  },
  {
    id: 32,
    category: "OOP - Klasslar",
    type: "closed",
    question: "Klass konstruktori qanday nomlanadi?",
    options: ["A) init()", "B) constructor()", "C) create()", "D) new()"],
    correctAnswer: "B) constructor()",
  },
  {
    id: 33,
    category: "OOP - Klasslar",
    type: "closed",
    question: "Klassdan obyekt yaratish uchun qaysi kalit so'z ishlatiladi?",
    options: ["A) create", "B) make", "C) new", "D) build"],
    correctAnswer: "C) new",
  },
  {
    id: 34,
    category: "OOP - Vorislik",
    type: "closed",
    question: "Bir klassni boshqa klassdan meros qilib olish uchun qaysi kalit so'z ishlatiladi?",
    options: ["A) inherit", "B) extends", "C) inherits", "D) from"],
    correctAnswer: "B) extends",
  },
  {
    id: 35,
    category: "OOP - Vorislik",
    type: "closed",
    question: "Ota-klass metodlarini chaqirish uchun qaysi kalit so'z ishlatiladi?",
    options: ["A) parent", "B) base", "C) super", "D) this"],
    correctAnswer: "C) super",
  },

  // Array metodlari - map, filter, reduce (36-50)
  {
    id: 36,
    category: "Array metodlari - map",
    type: "closed",
    question: "map() metodi nima qiladi?",
    options: [
      "A) Arrayni saralaydi",
      "B) Har bir elementni o'zgartirib yangi array qaytaradi",
      "C) Arrayni filtrlaydi",
      "D) Arrayni birlashtiradi",
    ],
    correctAnswer: "B) Har bir elementni o'zgartirib yangi array qaytaradi",
  },
  {
    id: 37,
    category: "Array metodlari - filter",
    type: "closed",
    question: "filter() metodi nima qiladi?",
    options: [
      "A) Shartga mos elementlarni yangi arrayda qaytaradi",
      "B) Arrayni saralaydi",
      "C) Birinchi elementni topadi",
      "D) Arrayni o'zgartiradi",
    ],
    correctAnswer: "A) Shartga mos elementlarni yangi arrayda qaytaradi",
  },
  {
    id: 38,
    category: "Array metodlari - reduce",
    type: "closed",
    question: "reduce() metodi nima qiladi?",
    options: [
      "A) Arrayni kichraytiradi",
      "B) Array elementlarini bitta qiymatga aylantiradi",
      "C) Arrayni filtrlaydi",
      "D) Arrayni saralaydi",
    ],
    correctAnswer: "B) Array elementlarini bitta qiymatga aylantiradi",
  },
  {
    id: 39,
    category: "Array metodlari - find",
    type: "closed",
    question: "find() metodi nima qaytaradi?",
    options: [
      "A) Shartga mos barcha elementlar",
      "B) Shartga mos birinchi element",
      "C) Element indeksi",
      "D) true yoki false",
    ],
    correctAnswer: "B) Shartga mos birinchi element",
  },
  {
    id: 40,
    category: "Array metodlari - some/every",
    type: "closed",
    question: "some() metodi qachon true qaytaradi?",
    options: [
      "A) Barcha elementlar shartga mos kelganda",
      "B) Hech bir element shartga mos kelmasa",
      "C) Kamida bitta element shartga mos kelsa",
      "D) Array bo'sh bo'lsa",
    ],
    correctAnswer: "C) Kamida bitta element shartga mos kelsa",
  },
  {
    id: 41,
    category: "Array metodlari - some/every",
    type: "closed",
    question: "every() metodi qachon true qaytaradi?",
    options: [
      "A) Kamida bitta element shartga mos kelsa",
      "B) Barcha elementlar shartga mos kelganda",
      "C) Hech bir element shartga mos kelmasa",
      "D) Array bo'sh bo'lsa",
    ],
    correctAnswer: "B) Barcha elementlar shartga mos kelganda",
  },
  {
    id: 42,
    category: "Array metodlari - sort",
    type: "closed",
    question: "sort() metodi sukut bo'yicha qanday saralaydi?",
    options: ["A) Raqamlar bo'yicha", "B) String sifatida", "C) Katta-kichiklik bo'yicha", "D) Tasodifiy"],
    correctAnswer: "B) String sifatida",
  },

  // Kod natijasi - OOP (43-50)
  {
    id: 43,
    category: "Kod natijasi - OOP",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\nlet p = new Person('Ali');\nconsole.log(p.name);",
    options: ["A) undefined", "B) Ali", "C) Person", "D) error"],
    correctAnswer: "B) Ali",
  },
  {
    id: 44,
    category: "Kod natijasi - OOP",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nclass Animal {\n  speak() { return 'Animal sound'; }\n}\nclass Dog extends Animal {\n  speak() { return 'Woof!'; }\n}\nlet d = new Dog();\nconsole.log(d.speak());",
    options: ["A) Animal sound", "B) Woof!", "C) undefined", "D) error"],
    correctAnswer: "B) Woof!",
  },

  // Kod natijasi - Array metodlari (45-55)
  {
    id: 45,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4];\nlet result = arr.map(x => x * 2);\nconsole.log(result);",
    options: ["A) [1, 2, 3, 4]", "B) [2, 4, 6, 8]", "C) [1, 4, 9, 16]", "D) 20"],
    correctAnswer: "B) [2, 4, 6, 8]",
  },
  {
    id: 46,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4, 5];\nlet result = arr.filter(x => x > 3);\nconsole.log(result);",
    options: ["A) [1, 2, 3]", "B) [4, 5]", "C) [3, 4, 5]", "D) true"],
    correctAnswer: "B) [4, 5]",
  },
  {
    id: 47,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4];\nlet result = arr.reduce((sum, x) => sum + x, 0);\nconsole.log(result);",
    options: ["A) [1, 2, 3, 4]", "B) 4", "C) 10", "D) 0"],
    correctAnswer: "C) 10",
  },
  {
    id: 48,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4];\nlet result = arr.find(x => x > 2);\nconsole.log(result);",
    options: ["A) [3, 4]", "B) 3", "C) 2", "D) true"],
    correctAnswer: "B) 3",
  },
  {
    id: 49,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [2, 4, 6, 8];\nlet result = arr.some(x => x % 2 === 0);\nconsole.log(result);",
    options: ["A) [2, 4, 6, 8]", "B) true", "C) false", "D) 4"],
    correctAnswer: "B) true",
  },
  {
    id: 50,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 3, 5, 7];\nlet result = arr.every(x => x % 2 === 1);\nconsole.log(result);",
    options: ["A) true", "B) false", "C) [1, 3, 5, 7]", "D) 1"],
    correctAnswer: "A) true",
  },
  {
    id: 51,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = ['banana', 'apple', 'cherry'];\narr.sort();\nconsole.log(arr);",
    options: [
      "A) ['banana', 'apple', 'cherry']",
      "B) ['apple', 'banana', 'cherry']",
      "C) ['cherry', 'banana', 'apple']",
      "D) ['apple', 'cherry', 'banana']",
    ],
    correctAnswer: "B) ['apple', 'banana', 'cherry']",
  },
  {
    id: 52,
    category: "Kod natijasi - Array metodlari",
    type: "closed",
    question: "Quyidagi kod natijasida nima chiqadi?\nlet arr = [10, 5, 20, 3];\narr.sort();\nconsole.log(arr);",
    options: ["A) [3, 5, 10, 20]", "B) [10, 20, 3, 5]", "C) [10, 20, 3, 5]", "D) [10, 20, 3, 5]"],
    correctAnswer: "C) [10, 20, 3, 5]",
  },

  // Murakkab Array metodlari kombinatsiyasi (53-60)
  {
    id: 53,
    category: "Kod natijasi - Murakkab",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4, 5];\nlet result = arr.filter(x => x % 2 === 0).map(x => x * 3);\nconsole.log(result);",
    options: ["A) [2, 4]", "B) [6, 12]", "C) [3, 6, 9, 12, 15]", "D) [1, 3, 5]"],
    correctAnswer: "B) [6, 12]",
  },
  {
    id: 54,
    category: "Kod natijasi - Murakkab",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4];\nlet result = arr.map(x => x * 2).reduce((sum, x) => sum + x);\nconsole.log(result);",
    options: ["A) 10", "B) 20", "C) [2, 4, 6, 8]", "D) 8"],
    correctAnswer: "B) 20",
  },
  {
    id: 55,
    category: "Kod natijasi - Murakkab",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = [1, 2, 3, 4, 5];\nlet result = arr.filter(x => x > 2).some(x => x % 2 === 0);\nconsole.log(result);",
    options: ["A) [3, 4, 5]", "B) true", "C) false", "D) [4]"],
    correctAnswer: "B) true",
  },

  // OOP - Static metodlar va getter/setter (56-60)
  {
    id: 56,
    category: "OOP - Static metodlar",
    type: "closed",
    question: "Static metod qanday chaqiriladi?",
    options: ["A) obyekt.metod()", "B) Klass.metod()", "C) new Klass().metod()", "D) this.metod()"],
    correctAnswer: "B) Klass.metod()",
  },
  {
    id: 57,
    category: "OOP - Getter/Setter",
    type: "closed",
    question: "Getter metod qanday e'lon qilinadi?",
    options: [
      "A) function get property() {}",
      "B) get property() {}",
      "C) getter property() {}",
      "D) property get() {}",
    ],
    correctAnswer: "B) get property() {}",
  },
  {
    id: 58,
    category: "Kod natijasi - Static",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nclass Math {\n  static add(a, b) { return a + b; }\n}\nconsole.log(Math.add(5, 3));",
    options: ["A) undefined", "B) 8", "C) error", "D) 53"],
    correctAnswer: "B) 8",
  },
  {
    id: 59,
    category: "Array metodlari - indexOf/includes",
    type: "closed",
    question: "includes() metodi nima qaytaradi?",
    options: ["A) Element indeksi", "B) Element qiymati", "C) true yoki false", "D) Yangi array"],
    correctAnswer: "C) true yoki false",
  },
  {
    id: 60,
    category: "Kod natijasi - includes",
    type: "closed",
    question:
      "Quyidagi kod natijasida nima chiqadi?\nlet arr = ['apple', 'banana', 'cherry'];\nconsole.log(arr.includes('banana'));",
    options: ["A) 1", "B) true", "C) false", "D) 'banana'"],
    correctAnswer: "B) true",
  },
]
