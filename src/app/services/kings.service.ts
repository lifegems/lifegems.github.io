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
    "kingName": "Joʹtham",
    "endReignYear": "762 B.C.E.",
    "kingNamePlain": "Jotham",
    "kingNumber": 10,
    "startReignYear": "777 B.C.E."
  },
  {
    "kingName": "Zed·e·kiʹah",
    "endReignYear": "607 B.C.E.",
    "kingNamePlain": "Zedekiah",
    "kingNumber": 18,
    "startReignYear": "617 B.C.E."
  },
  {
    "kingName": "Je·hoiʹa·kim",
    "endReignYear": "618 B.C.E.",
    "kingNamePlain": "Jehoiakim",
    "kingNumber": 17,
    "startReignYear": "628 B.C.E."
  },
  {
    "kingName": "Je·hoʹa·haz",
    "endReignYear": "628 B.C.E.",
    "kingNamePlain": "Jehoahaz",
    "kingNumber": 16,
    "startReignYear": "628 B.C.E."
  },
  {
    "kingName": "Jo·siʹah",
    "endReignYear": "628 B.C.E.",
    "kingNamePlain": "Josiah",
    "kingNumber": 15,
    "startReignYear": "659 B.C.E."
  },
  {
    "kingName": "Aʹmon",
    "endReignYear": "659 B.C.E.",
    "kingNamePlain": "Amon",
    "kingNumber": 14,
    "startReignYear": "661 B.C.E."
  },
  {
    "kingName": "Ma·nasʹseh",
    "endReignYear": "661 B.C.E.",
    "kingNamePlain": "Manasseh",
    "kingNumber": 13,
    "startReignYear": "716 B.C.E."
  },
  {
    "kingName": "Hez·e·kiʹah",
    "endReignYear": "716 B.C.E.",
    "kingNamePlain": "Hezekiah",
    "kingNumber": 12,
    "startReignYear": "746 B.C.E."
  },
  {
    "kingName": "Aʹhaz",
    "endReignYear": "746 B.C.E.",
    "kingNamePlain": "Ahaz",
    "kingNumber": 11,
    "startReignYear": "762 B.C.E."
  },
  {
    "kingName": "Uz·ziʹah",
    "endReignYear": "777 B.C.E.",
    "kingNamePlain": "Uzziah (Azariah)",
    "kingNumber": 9,
    "startReignYear": "829 B.C.E."
  },
  {
    "kingName": "Am·a·ziʹah",
    "endReignYear": "829 B.C.E.",
    "kingNamePlain": "Amaziah",
    "kingNumber": 8,
    "startReignYear": "858 B.C.E."
  },
  {
    "kingName": "Je·hoʹash",
    "endReignYear": "858 B.C.E.",
    "kingNamePlain": "Jehoash",
    "kingNumber": 7,
    "startReignYear": "898 B.C.E."
  },
  {
    "kingName": "A·ha·ziʹah",
    "endReignYear": "c. 905 B.C.E.",
    "kingNamePlain": "Ahaziah",
    "kingNumber": 6,
    "startReignYear": "c. 906 B.C.E."
  },
  {
    "kingName": "Je·hoʹram",
    "endReignYear": "c. 906 B.C.E.",
    "kingNamePlain": "Jehoram",
    "kingNumber": 5,
    "startReignYear": "913 B.C.E."
  },
  {
    "kingName": "Je·hoshʹa·phat",
    "endReignYear": "913 B.C.E.",
    "kingNamePlain": "Jehoshaphat",
    "kingNumber": 4,
    "startReignYear": "937 B.C.E."
  },
  {
    "kingName": "Aʹsa",
    "endReignYear": "937 B.C.E",
    "kingNamePlain": "Asa",
    "kingNumber": 3,
    "startReignYear": "978 B.C.E."
  },
  {
    "kingName": "A·biʹjah",
    "endReignYear": "978 B.C.E.",
    "kingNamePlain": "Abijah",
    "kingNumber": 2,
    "startReignYear": "980 B.C.E."
  },
  {
    "kingName": "Re·ho·boʹam",
    "endReignYear": "980 B.C.E.",
    "kingNamePlain": "Rehoboam",
    "kingNumber": 1,
    "startReignYear": "997 B.C.E."
  }
];