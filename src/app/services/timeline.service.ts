import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimelineItem } from '../models/timeline-item.model';

@Injectable()
export class TimelineService {
   getAllItems() {
      let items: any = [
         ...bibleBooksCoverage,
         ...events,
         ...kingsOfJudah,
         ...kingsOfSamaria,
         ...lifespans,
         ...prophets,
         ...outstandingHistoricalDates,
      ];
      return Observable.create(observer => {
         observer.next(items);
      });
   }
}

const lifespans: TimelineItem[] = [
   { name: "Jehovah",    start: 4100, end: 1,    tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehovah",    group: "Lifespans"},
   { name: "Adam",       start: 4026, end: 3096, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Adam",       group: "Lifespans"},
   { name: "Enoch",      start: 3404, end: 3039, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Enoch",      group: "Lifespans"},
   { name: "Methuselah", start: 3339, end: 2370, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Methuselah", group: "Lifespans"},
];

const outstandingHistoricalDates: TimelineItem[] = [
   { name: "Adam's creation",                      start: 4026, end: 4026, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Adam",       group: "Outstanding Historical Dates"},
   { name: "Edenic covenant made, first prophecy", start: 4026, end: 4026, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Covenant",   group: "Outstanding Historical Dates"},
   { name: "Cain slays Abel",                      start: 3896, end: 3896, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Cain",       group: "Outstanding Historical Dates"},
   { name: "Birth of Seth",                        start: 3896, end: 3896, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Seth",       group: "Outstanding Historical Dates"},
   { name: "Birth of righteous Enoch",             start: 3404, end: 3404, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Enoch",      group: "Outstanding Historical Dates"},
   { name: "Birth of Methuselah",                  start: 3339, end: 3339, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Methuselah", group: "Outstanding Historical Dates"},
   { name: "Birth of Lamech",                      start: 3152, end: 3152, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Lamech",     group: "Outstanding Historical Dates"},
   { name: "Death of Adam",                        start: 3096, end: 3096, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Adam",       group: "Outstanding Historical Dates"},
   { name: "Transference of Enoch",                start: 3039, end: 3039, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Enoch",      group: "Outstanding Historical Dates"},
   { name: "Birth of Noah",                        start: 2970, end: 2970, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Noah",       group: "Outstanding Historical Dates"},
   { name: "God's pronouncement as to mankind",    start: 2490, end: 2490, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Flood",      group: "Outstanding Historical Dates"},
   { name: "Birth of Japeth",                      start: 2470, end: 2470, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Japeth",     group: "Outstanding Historical Dates"},
   { name: "Birth of Shem",                        start: 2468, end: 2468, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Shem",       group: "Outstanding Historical Dates"},
   { name: "Death of Methuselah",                  start: 2370, end: 2370, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Methuselah", group: "Outstanding Historical Dates"},
   { name: "The Great Flood",                      start: 2370, end: 2370, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Flood",      group: "Outstanding Historical Dates"},
];

const bibleBooksCoverage: TimelineItem[] = [
   { name: 'Genesis',         start: 4100, end: 1657, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Genesis",             group: "Bible Books Time Period"},
   { name: 'Exodus',          start: 1657, end: 1512, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Exodus",              group: "Bible Books Time Period"},
   { name: 'Leviticus',       start: 1512, end: 1512, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Leviticus",           group: "Bible Books Time Period"},
   { name: 'Numbers',         start: 1512, end: 1473, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Numbers",             group: "Bible Books Time Period"},
   { name: 'Deuteronomy',     start: 1473, end: 1473, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Deuteronomy",         group: "Bible Books Time Period"},
   { name: 'Joshua',          start: 1473, end: 1450, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joshua",              group: "Bible Books Time Period"},
   { name: 'Judges',          start: 1450, end: 1120, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Judges",              group: "Bible Books Time Period"},
   { name: 'Ruth',            start: 1131, end: 1120, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ruth",                group: "Bible Books Time Period"},
   { name: '1 Samuel',        start: 1180, end: 1078, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=1%20Samuel",          group: "Bible Books Time Period"},
   { name: '2 Samuel',        start: 1077, end: 1040, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=2%20Samuel",          group: "Bible Books Time Period"},
   { name: '1 Kings',         start: 1040, end: 911,  tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=1%20Kings",           group: "Bible Books Time Period"},
   { name: '2 Kings',         start: 920,  end: 580,  tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=2%20Kings",           group: "Bible Books Time Period"},
   { name: '1 Chronicles',    start: 1077, end: 1037, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=1%20Chronicles",      group: "Bible Books Time Period"},
   { name: '2 Chronicles',    start: 1037, end: 537,  tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=2%20Chronicles",      group: "Bible Books Time Period"},
   { name: 'Ezra',            start: 537,  end: 467,  tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezra",                group: "Bible Books Time Period"},
   { name: 'Nehemiah',        start: 456,  end: 443,  tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nehemiah",            group: "Bible Books Time Period"},
   { name: 'Esther',          start: 493,  end: 475,  tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Esther",              group: "Bible Books Time Period"},
   { name: 'Psalms',          start: 460,  end: 460,  tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Psalms",              group: "Bible Books Time Period"},
   { name: 'Proverbs',        start: 717,  end: 717,  tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Proverbs",            group: "Bible Books Time Period"},
   { name: 'Ecclesiastes',    start: 1000, end: 1000, tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ecclesiastes",        group: "Bible Books Time Period"},
   { name: 'Song of Solomon', start: 1020, end: 1020, tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Song%20of%20Solomon", group: "Bible Books Time Period"},
   { name: 'Isaiah',          start: 778,  end: 732,  tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Isaiah",              group: "Bible Books Time Period"},
   { name: 'Jeremiah',        start: 647,  end: 580,  tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeremiah",            group: "Bible Books Time Period"},
   { name: 'Lamentations',    start: 607,  end: 607,  tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Lamentations",        group: "Bible Books Time Period"},
   { name: 'Ezekiel',         start: 613,  end: 591,  tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezekiel",             group: "Bible Books Time Period"},
   { name: 'Daniel',          start: 618,  end: 536,  tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Daniel",              group: "Bible Books Time Period"},
   { name: 'Hosea',           start: 804,  end: 745,  tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hosea",               group: "Bible Books Time Period"},
   { name: 'Joel',            start: 820,  end: 820,  tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joel",                group: "Bible Books Time Period"},
   { name: 'Amos',            start: 804,  end: 804,  tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amos",                group: "Bible Books Time Period"},
   { name: 'Obadiah',         start: 607,  end: 607,  tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Obadiah",             group: "Bible Books Time Period"},
   { name: 'Jonah',           start: 844,  end: 844,  tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jonah",               group: "Bible Books Time Period"},
   { name: 'Micah',           start: 777,  end: 717,  tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Micah",               group: "Bible Books Time Period"},
   { name: 'Nahum',           start: 632,  end: 632,  tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nahum",               group: "Bible Books Time Period"},
   { name: 'Habakkuk',        start: 628,  end: 628,  tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Habakkukl",           group: "Bible Books Time Period"},
   { name: 'Zephaniah',       start: 648,  end: 648,  tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zephaniah",           group: "Bible Books Time Period"},
   { name: 'Haggai',          start: 520,  end: 520,  tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Haggai",              group: "Bible Books Time Period"},
   { name: 'Zechariah',       start: 520,  end: 518,  tier: 6, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zechariah",           group: "Bible Books Time Period"},
   { name: 'Malachi',         start: 443,  end: 443,  tier: 5, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Malachi",             group: "Bible Books Time Period"},
];

const kingsOfJudah: TimelineItem[] = [
   { name: 'Rehoboam',    start: 997, end: 980, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Rehoboam", group: "Kings of Judah" },
   { name: 'Abijah',      start: 980, end: 978, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Abijah", group: "Kings of Judah" },
   { name: 'Asa',         start: 978, end: 937, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Asa", group: "Kings of Judah" },
   { name: 'Jehoshaphat', start: 937, end: 913, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoshaphat", group: "Kings of Judah" },
   { name: 'Jehoram',     start: 913, end: 906, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoram", group: "Kings of Judah" },
   { name: 'Ahaziah',     start: 906, end: 905, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaziah", group: "Kings of Judah" },
   { name: 'Athaliah',    start: 905, end: 898, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Athaliah", group: "Kings of Judah" },
   { name: 'Jehoash',     start: 898, end: 858, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoash", group: "Kings of Judah" },
   { name: 'Amaziah',     start: 858, end: 829, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amaziah", group: "Kings of Judah" },
   { name: 'Uzziah',      start: 829, end: 777, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Uzziah", group: "Kings of Judah" },
   { name: 'Jotham',      start: 777, end: 762, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jotham", group: "Kings of Judah" },
   { name: 'Ahaz',        start: 762, end: 746, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaz", group: "Kings of Judah" },
   { name: 'Hezekiah',    start: 746, end: 716, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hezekiah", group: "Kings of Judah" },
   { name: 'Manasseh',    start: 716, end: 661, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Manasseh", group: "Kings of Judah" },
   { name: 'Amon',        start: 661, end: 659, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amon", group: "Kings of Judah" },
   { name: 'Josiah',      start: 659, end: 628, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Josiah", group: "Kings of Judah" },
   { name: 'Jehoahaz',    start: 628, end: 628, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoahaz", group: "Kings of Judah" },
   { name: 'Jehoiakim',   start: 628, end: 618, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoiakim", group: "Kings of Judah" },
   { name: 'Jehoiachin',  start: 618, end: 617, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoiachin", group: "Kings of Judah" },
   { name: 'Zedekiah',    start: 617, end: 607, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zedekiah", group: "Kings of Judah" },
];

const kingsOfSamaria: TimelineItem[] = [
   { name: 'Jeroboam',    start: 997, end: 976, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeroboam", group: "Kings of Samaria" },
   { name: 'Nadab',       start: 976, end: 975, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nadab", group: "Kings of Samaria" },
   { name: 'Baasha',      start: 975, end: 952, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Baasha", group: "Kings of Samaria" },
   { name: 'Elah',        start: 952, end: 951, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elah", group: "Kings of Samaria" },
   { name: 'Zimri',       start: 951, end: 951, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zimri", group: "Kings of Samaria" },
   { name: 'Tibni',       start: 951, end: 947, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Tibni", group: "Kings of Samaria" },
   { name: 'Omri',        start: 951, end: 940, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Omri", group: "Kings of Samaria" },
   { name: 'Ahab',        start: 940, end: 920, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahab", group: "Kings of Samaria" },
   { name: 'Ahaziah',     start: 920, end: 917, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ahaziah", group: "Kings of Samaria" },
   { name: 'Jehoram',     start: 917, end: 905, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoram", group: "Kings of Samaria" },
   { name: 'Jehu',        start: 905, end: 876, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehu", group: "Kings of Samaria" },
   { name: 'Jehoahaz',    start: 876, end: 859, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoahaz", group: "Kings of Samaria" },
   { name: 'Jehoash',     start: 862, end: 844, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jehoash", group: "Kings of Samaria" },
   { name: 'Jeroboam II', start: 844, end: 803, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeroboam", group: "Kings of Samaria" },
   { name: 'Zechariah',   start: 803, end: 791, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zechariah", group: "Kings of Samaria" },
   { name: 'Shallum',     start: 791, end: 791, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Shallum", group: "Kings of Samaria" },
   { name: 'Menahem',     start: 791, end: 780, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Menahem", group: "Kings of Samaria" },
   { name: 'Pekahiah',    start: 780, end: 778, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Pekahiah", group: "Kings of Samaria" },
   { name: 'Pekah',       start: 778, end: 758, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Pekah", group: "Kings of Samaria" },
   { name: 'Hoshea',      start: 758, end: 740, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hoshea", group: "Kings of Samaria" },
];

const prophets: TimelineItem[] = [
   { name: 'Elijah',    start: 940, end: 905, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elijah", group: "Prophets" },
   { name: 'Elishah',   start: 917, end: 852, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Elishah", group: "Prophets" },
   { name: 'Jonah',     start: 849, end: 818, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jonah", group: "Prophets" },
   { name: 'Amos',      start: 829, end: 803, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Amos", group: "Prophets" },
   { name: 'Joel',      start: 825, end: 820, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Joel", group: "Prophets" },
   { name: 'Hosea',     start: 808, end: 740, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Hosea", group: "Prophets" },
   { name: 'Isaiah',    start: 780, end: 730, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Isaiah", group: "Prophets" },
   { name: 'Micah',     start: 775, end: 716, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Micah", group: "Prophets" },
   { name: 'Zephaniah', start: 659, end: 640, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Zephaniah", group: "Prophets" },
   { name: 'Nahum',     start: 659, end: 635, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Nahum", group: "Prophets" },
   { name: 'Jeremiah',  start: 645, end: 570, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Jeremiah", group: "Prophets" },
   { name: 'Habakkuk',  start: 633, end: 623, tier: 4, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Habakkuk", group: "Prophets" },
   { name: 'Obadiah',   start: 613, end: 600, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Obadiah", group: "Prophets" },
   { name: 'Ezekiel',   start: 610, end: 591, tier: 2, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Ezekiel", group: "Prophets" },
   { name: 'Daniel',    start: 617, end: 535, tier: 3, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Daniel", group: "Prophets" },
];

const events: TimelineItem[] = [
   { name: 'Destruction of Samaria',           start: 740, end: 740, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Destruction%20of%20Samaria", group: "Events" },
   { name: 'Destruction of Jerusalem',         start: 607, end: 607, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Destruction%20of%20Jerusalem", group: "Events" },
   { name: 'Freed from Babylonian Captivity',  start: 535, end: 535, tier: 1, url: "https://wol.jw.org/en/wol/s/r1/lp-e?q=Freed%20from%20Babylonian%20Captivity", group: "Events" },
];