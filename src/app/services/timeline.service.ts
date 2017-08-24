import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimelineService {
   getAllItems() {
      let items: any = {
         kingsOfJudah:   kingsOfJudah,
         kingsOfSamaria: kingsOfSamaria,
         prophets:       prophets,
         events:         events
      };
      return Observable.create(observer => {
         observer.next(items);
      });
   }

   getKingsOfJudah() {
      return Observable.create(observer => {
         observer.next(kingsOfJudah);
      });
   }
   
   getKingsOfSamaria() {
      return Observable.create(observer => {
         observer.next(kingsOfSamaria);
      });
   }
   
   getProphets() {
      return Observable.create(observer => {
         observer.next(prophets);
      });
   }
   
   getEvents() {
      return Observable.create(observer => {
         observer.next(events);
      });
   }
}



const kingsOfJudah: any[] = [
   { name: 'Rehoboam',    start: 997, end: 980, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Rehoboam" },
   { name: 'Abijah',      start: 980, end: 978, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Abijah" },
   { name: 'Asa',         start: 978, end: 937, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Asa" },
   { name: 'Jehoshaphat', start: 937, end: 913, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoshaphat" },
   { name: 'Jehoram',     start: 913, end: 906, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoram" },
   { name: 'Ahaziah',     start: 906, end: 905, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaziah" },
   { name: 'Athaliah',    start: 905, end: 898, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Athaliah" },
   { name: 'Jehoash',     start: 898, end: 858, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoash" },
   { name: 'Amaziah',     start: 858, end: 829, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amaziah" },
   { name: 'Uzziah',      start: 829, end: 777, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Uzziah" },
   { name: 'Jotham',      start: 777, end: 762, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jotham" },
   { name: 'Ahaz',        start: 762, end: 746, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaz" },
   { name: 'Hezekiah',    start: 746, end: 716, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hezekiah" },
   { name: 'Manasseh',    start: 716, end: 661, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Manasseh" },
   { name: 'Amon',        start: 661, end: 659, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amon" },
   { name: 'Josiah',      start: 659, end: 628, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Josiah" },
   { name: 'Jehoahaz',    start: 628, end: 628, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoahaz" },
   { name: 'Jehoiakim',   start: 628, end: 618, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoiakim" },
   { name: 'Jehoiachin',  start: 618, end: 617, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoiachin" },
   { name: 'Zedekiah',    start: 617, end: 607, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zedekiah" },
];

const kingsOfSamaria: any[] = [
   { name: 'Jeroboam',    start: 997, end: 976, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeroboam" },
   { name: 'Nadab',       start: 976, end: 975, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nadab" },
   { name: 'Baasha',      start: 975, end: 952, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Baasha" },
   { name: 'Elah',        start: 952, end: 951, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elah" },
   { name: 'Zimri',       start: 951, end: 951, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zimri" },
   { name: 'Tibni',       start: 951, end: 947, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Tibni" },
   { name: 'Omri',        start: 951, end: 940, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Omri" },
   { name: 'Ahab',        start: 940, end: 920, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahab" },
   { name: 'Ahaziah',     start: 920, end: 917, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaziah" },
   { name: 'Jehoram',     start: 917, end: 905, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoram" },
   { name: 'Jehu',        start: 905, end: 876, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehu" },
   { name: 'Jehoahaz',    start: 876, end: 859, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoahaz" },
   { name: 'Jehoash',     start: 862, end: 844, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoash" },
   { name: 'Jeroboam II', start: 844, end: 803, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeroboam" },
   { name: 'Zechariah',   start: 803, end: 791, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zechariah" },
   { name: 'Shallum',     start: 791, end: 791, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Shallum" },
   { name: 'Menahem',     start: 791, end: 780, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Menahem" },
   { name: 'Pekahiah',    start: 780, end: 778, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Pekahiah" },
   { name: 'Pekah',       start: 778, end: 758, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Pekah" },
   { name: 'Hoshea',      start: 758, end: 740, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hoshea" },
];

const prophets: any[] = [
   { name: 'Elijah',    start: 940, end: 905, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elijah" },
   { name: 'Elishah',   start: 917, end: 852, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elishah" },
   { name: 'Jonah',     start: 849, end: 818, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jonah" },
   { name: 'Amos',      start: 829, end: 803, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amos" },
   { name: 'Joel',      start: 825, end: 820, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joel" },
   { name: 'Hosea',     start: 808, end: 740, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hosea" },
   { name: 'Isaiah',    start: 780, end: 730, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Isaiah" },
   { name: 'Micah',     start: 775, end: 716, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Micah" },
   { name: 'Zephaniah', start: 659, end: 640, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zephaniah" },
   { name: 'Nahum',     start: 659, end: 635, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nahum" },
   { name: 'Jeremiah',  start: 645, end: 570, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeremiah" },
   { name: 'Habakkuk',  start: 633, end: 623, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Habakkuk" },
   { name: 'Obadiah',   start: 613, end: 600, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Obadiah" },
   { name: 'Ezekiel',   start: 610, end: 591, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezekiel" },
   { name: 'Daniel',    start: 617, end: 535, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Daniel" },
];

const events: any[] = [
   { name: 'Destruction of Samaria',           start: 740, end: 740, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Destruction%20of%20Samaria" },
   { name: 'Destruction of Jerusalem',         start: 607, end: 607, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Destruction%20of%20Jerusalem" },
   { name: 'Freed from Babylonian Captivity',  start: 535, end: 535, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Freed%20from%20Babylonian%20Captivity" },
];