// Дз 14
// Задание 3
function additionOfNumbers(a: number, b: number): number {
  return a + b;
}
console.log(additionOfNumbers(1, 2));

// Задание 4
let variableStatus: 'loading' | 'success' | 'error';

// Задание 5
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
const textFormat: TextFormat = 'lowercase';

// Задание 6
interface IUser {
  login: string;
  email: string;
  password: number;
  address?: {
    street?: string;
    house?: number;
  };
}

const user: IUser = {
  login: 'Leziz',
  email: '001.Leziz.2006@gmai.com',
  password: 12345,
  address: {
    street: 'Watson 13',
  },
};

// Задание 7
interface IUserWorker extends IUser {
  job: string;
  experience: number;
}

// Задание 8
function formatString(str: string, format: TextFormat): string {
  if (format === 'lowercase') return str.toLowerCase();
  if (format === 'uppercase') return str.toUpperCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(formatString('lEzIz sAALamOv', 'uppercase'));

// Задание 9
function removeChar(str: string, char: string): string {
  return str.replaceAll(char, '');
}
console.log(removeChar('Leziz Saalamov', 'a'));

// Задание 10
const userArr: IUser[] = [
  {
    login: 'Leziz',
    email: '001.Leziz.2006@gmai.com',
    password: 12345,
    address: {
      street: 'Watson 13',
    },
  },
  {
    login: 'Adam',
    email: '001.Adam.2006@gmai.ru',
    password: 12423,
    address: {
      street: 'Watson 15',
      house: 15,
    },
  },
  {
    login: 'Islam',
    email: '001.Islam.2006@gmai.com',
    password: 16333,
    address: {
      street: 'Watson 23',
      house: 23,
    },
  },
];

const filteredUserArr: IUser[] = userArr.filter((el) => {
  return el.email.includes('.com');
});
console.log(filteredUserArr);
