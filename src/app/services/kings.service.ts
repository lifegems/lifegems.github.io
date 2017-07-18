import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KingsService {
   getKings() {
      return Observable.create(observer => {
         observer.next(kings);
      });
   }
}

let kings: any[] = [
  {
    "kingNumber": 20,
    "kingName": "Zed·e·kiʹah",
    "kingNamePlain": "Zedekiah",
    "startReignYear": "617 B.C.E.",
    "endReignYear": "607 B.C.E.",
    "highPriests": [],
    "nextKing": null,
    "sons": [],
  },
  {
    "kingNumber": 19,
    "kingName": "Je·hoiʹa·chin (Jec·o·niʹah)",
    "kingNamePlain": "Jehoiachin",
    "startReignYear": "618 B.C.E.",
    "endReignYear": "617 B.C.E.",
    "highPriests": [],
    "nextKing": "Zed·e·kiʹah",
    "sons": ["Zed·e·kiʹah"],
  },
  {
    "kingNumber": 18,
    "kingName": "Je·hoiʹa·kim (E·liʹa·kim)",
    "kingNamePlain": "Jehoiakim",
    "startReignYear": "628 B.C.E.",
    "endReignYear": "618 B.C.E.",
    "highPriests": [],
    "nextKing": "Je·hoiʹa·chin",
    "sons": ["Je·hoiʹa·chin"],
  },
  {
    "kingNumber": 17,
    "kingName": "Je·hoʹa·haz (Shalʹlum)",
    "kingNamePlain": "Jehoahaz",
    "startReignYear": "628 B.C.E.",
    "endReignYear": "628 B.C.E.",
    "highPriests": [],
    "nextKing": "Je·hoiʹa·kim",
    "sons": [],
  },
  {
    "kingNumber": 16,
    "kingName": "Jo·siʹah",
    "kingNamePlain": "Josiah",
    "startReignYear": "659 B.C.E.",
    "endReignYear": "628 B.C.E.",
    "highPriests": [],
    "nextKing": "Je·hoʹa·haz (Shalʹlum)",
    "sons": ["Je·hoʹa·haz","Jo·haʹnan","Je·hoiʹa·kim","Zed·e·kiʹah"],
  },
  {
    "kingNumber": 15,
    "kingName": "Aʹmon",
    "kingNamePlain": "Amon",
    "startReignYear": "661 B.C.E.",
    "endReignYear": "659 B.C.E.",
    "highPriests": [],
    "nextKing": "Jo·siʹah",
    "sons": ["Jo·siʹah"],
  },
  {
    "kingNumber": 14,
    "kingName": "Ma·nasʹseh",
    "kingNamePlain": "Manasseh",
    "startReignYear": "716 B.C.E.",
    "endReignYear": "661 B.C.E.",
    "highPriests": [],
    "nextKing": "Aʹmon",
    "sons": ["Aʹmon"],
  },
  {
    "kingNumber": 13,
    "kingName": "Hez·e·kiʹah",
    "kingNamePlain": "Hezekiah",
    "startReignYear": "746 B.C.E.",
    "endReignYear": "716 B.C.E.",
    "highPriests": [
       "Az·a·riʹah"
    ],
    "nextKing": "Ma·nasʹseh",
    "sons": ["Ma·nasʹseh"],
  },
  {
    "kingNumber": 12,
    "kingName": "Aʹhaz",
    "kingNamePlain": "Ahaz",
    "startReignYear": "762 B.C.E.",
    "endReignYear": "746 B.C.E.",
    "highPriests": [
       "Az·a·riʹah"
    ],
    "nextKing": "Hez·e·kiʹah",
    "sons": ["Hez·e·kiʹah"],
  },
  {
    "kingNumber": 11,
    "kingName": "Joʹtham",
    "kingNamePlain": "Jotham",
    "startReignYear": "777 B.C.E.",
    "endReignYear": "762 B.C.E.",
    "highPriests": [
       "Az·a·riʹah"
    ],
    "nextKing": "Aʹhaz",
    "sons": ["Aʹhaz"],
  },
  {
    "kingNumber": 10,
    "kingName": "Uz·ziʹah",
    "kingNamePlain": "Uzziah",
    "startReignYear": "829 B.C.E.",
    "endReignYear": "777 B.C.E.",
    "highPriests": [
       "Az·a·riʹah"
    ],
    "nextKing": "Joʹtham",
    "sons": ["Joʹtham"],
  },
  {
    "kingNumber": 9,
    "kingName": "Am·a·ziʹah",
    "kingNamePlain": "Amaziah",
    "startReignYear": "858 B.C.E.",
    "endReignYear": "829 B.C.E.",
    "highPriests": ["Jo·haʹnan"],
    "nextKing": "Uz·ziʹah",
    "sons": ["Uz·ziʹah"],
  },
  {
    "kingNumber": 8,
    "kingName": "Je·hoʹash",
    "kingNamePlain": "Jehoash",
    "startReignYear": "898 B.C.E.",
    "endReignYear": "858 B.C.E.",
    "highPriests": ["Je·hoiʹa·da"],
    "nextKing": "Am·a·ziʹah",
    "prophets": ["E·liʹshah"],
    "sons": ["Am·a·ziʹah"],
  },
  {
    "kingNumber": 7,
    "kingName": "Queen Ath·a·liʹah",
    "kingNamePlain": "Athaliah",
    "startReignYear": "c. 905 B.C.E.",
    "endReignYear": "898 B.C.E.",
    "highPriests": ["Je·hoiʹa·da"],
    "nextKing": "Je·hoʹash",
    "prophets": ["E·liʹshah"],
    "sons": [],
  },
  {
    "kingNumber": 6,
    "kingName": "A·ha·ziʹah",
    "kingNamePlain": "Ahaziah",
    "startReignYear": "c. 906 B.C.E.",
    "endReignYear": "c. 905 B.C.E.",
    "highPriests": ["Je·hoiʹa·da"],
    "nextKing": "Ath·a·liʹah",
    "prophets": ["E·liʹjah","E·liʹshah"],
    "sons": ["Je·hoʹash"],
  },
  {
    "kingNumber": 5,
    "kingName": "Je·hoʹram",
    "kingNamePlain": "Jehoram",
    "startReignYear": "913 B.C.E.",
    "endReignYear": "c. 906 B.C.E.",
    "highPriests": ["Je·hoiʹa·da"],
    "nextKing": "A·ha·ziʹah",
    "prophets": ["E·liʹjah","E·liʹshah"],
    "sons": ["A·ha·ziʹah"],
  },
  {
    "kingNumber": 4,
    "kingName": "Je·hoshʹa·phat",
    "kingNamePlain": "Jehoshaphat",
    "startReignYear": "937 B.C.E.",
    "endReignYear": "913 B.C.E.",
    "highPriests": [],
    "nextKing": "Je·hoʹram",
    "prophets": ["E·liʹjah","E·liʹshah"],
    "sons": ["Je·hoʹram"],
  },
  {
    "kingNumber": 3,
    "kingName": "Aʹsa",
    "kingNamePlain": "Asa",
    "startReignYear": "978 B.C.E.",
    "endReignYear": "937 B.C.E",
    "highPriests": [],
    "nextKing": "Je·hoshʹa·phat",
    "prophets": ["E·liʹjah","Az·a·riʹah"],
    "sons": ["Je·hoshʹa·phat"],
  },
  {
    "kingNumber": 2,
    "kingName": "A·biʹjah",
    "kingNamePlain": "Abijah",
    "startReignYear": "980 B.C.E.",
    "endReignYear": "978 B.C.E.",
    "highPriests": [],
    "nextKing": "Aʹsa",
    "prophets": [],
    "sons": ["Aʹsa"],
  },
  {
    "kingNumber": 1,
    "kingName": "Re·ho·boʹam",
    "kingNamePlain": "Rehoboam",
    "age": 41,
    "startReignYear": "997 B.C.E.",
    "endReignYear": "980 B.C.E.",
    "highPriests": [
       "Az·a·riʹah"
    ],
    "nextKing": "A·biʹjah",
    "prophets": [],
    "sons": [
       "A·biʹjah"
    ],
  }
];