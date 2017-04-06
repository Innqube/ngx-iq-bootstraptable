import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {TableResultsPage} from './component-wrapper/src/app/table-results-page';
import {ColumnOrder} from './component-wrapper/src/app/column-order';

export class Person {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}

@Injectable()
export class MockDataService {

    private persons: Person[] = [{
        'id': 1,
        'firstname': 'Evelyn',
        'lastname': 'Burns',
        'email': 'eburns0@amazon.co.uk'
    }, {
        'id': 2,
        'firstname': 'Jacqueline',
        'lastname': 'Montgomery',
        'email': 'jmontgomery1@fda.gov'
    }, {
        'id': 3,
        'firstname': 'Albert',
        'lastname': 'Moreno',
        'email': 'amoreno2@mac.com'
    }, {
        'id': 4,
        'firstname': 'Donna',
        'lastname': 'Hawkins',
        'email': 'dhawkins3@hud.gov'
    }, {
        'id': 5,
        'firstname': 'David',
        'lastname': 'Nichols',
        'email': 'dnichols4@pen.io'
    }, {
        'id': 6,
        'firstname': 'Diana',
        'lastname': 'Garcia',
        'email': 'dgarcia5@amazon.com'
    }, {
        'id': 7,
        'firstname': 'Phillip',
        'lastname': 'Nelson',
        'email': 'pnelson6@wikimedia.org'
    }, {
        'id': 8,
        'firstname': 'Amy',
        'lastname': 'Wagner',
        'email': 'awagner7@nbcnews.com'
    }, {
        'id': 9,
        'firstname': 'Jean',
        'lastname': 'Ramirez',
        'email': 'jramirez8@360.cn'
    }, {
        'id': 10,
        'firstname': 'Dennis',
        'lastname': 'Jacobs',
        'email': 'djacobs9@cmu.edu'
    }, {
        'id': 11,
        'firstname': 'Phillip',
        'lastname': 'Gonzales',
        'email': 'pgonzalesa@ucsd.edu'
    }, {
        'id': 12,
        'firstname': 'Ruby',
        'lastname': 'Campbell',
        'email': 'rcampbellb@nbcnews.com'
    }, {
        'id': 13,
        'firstname': 'Tammy',
        'lastname': 'Hernandez',
        'email': 'thernandezc@wikimedia.org'
    }, {
        'id': 14,
        'firstname': 'Betty',
        'lastname': 'Lewis',
        'email': 'blewisd@vinaora.com'
    }, {
        'id': 15,
        'firstname': 'Jacqueline',
        'lastname': 'Allen',
        'email': 'jallene@wikispaces.com'
    }, {
        'id': 16,
        'firstname': 'Amy',
        'lastname': 'Reed',
        'email': 'areedf@yellowbook.com'
    }, {
        'id': 17,
        'firstname': 'Ann',
        'lastname': 'Vasquez',
        'email': 'avasquezg@ezinearticles.com'
    }, {
        'id': 18,
        'firstname': 'Laura',
        'lastname': 'Warren',
        'email': 'lwarrenh@instagram.com'
    }, {
        'id': 19,
        'firstname': 'Norma',
        'lastname': 'Boyd',
        'email': 'nboydi@tiny.cc'
    }, {
        'id': 20,
        'firstname': 'Ann',
        'lastname': 'Hawkins',
        'email': 'ahawkinsj@w3.org'
    }, {
        'id': 21,
        'firstname': 'Brenda',
        'lastname': 'Olson',
        'email': 'bolsonk@foxnews.com'
    }, {
        'id': 22,
        'firstname': 'Gerald',
        'lastname': 'Evans',
        'email': 'gevansl@wikispaces.com'
    }, {
        'id': 23,
        'firstname': 'Louise',
        'lastname': 'Stevens',
        'email': 'lstevensm@is.gd'
    }, {
        'id': 24,
        'firstname': 'Daniel',
        'lastname': 'Hicks',
        'email': 'dhicksn@webs.com'
    }, {
        'id': 25,
        'firstname': 'Helen',
        'lastname': 'Wallace',
        'email': 'hwallaceo@mayoclinic.com'
    }, {
        'id': 26,
        'firstname': 'William',
        'lastname': 'Mason',
        'email': 'wmasonp@usa.gov'
    }, {
        'id': 27,
        'firstname': 'Elizabeth',
        'lastname': 'Russell',
        'email': 'erussellq@rediff.com'
    }, {
        'id': 28,
        'firstname': 'Alan',
        'lastname': 'Peterson',
        'email': 'apetersonr@weibo.com'
    }, {
        'id': 29,
        'firstname': 'Larry',
        'lastname': 'Ramirez',
        'email': 'lramirezs@oracle.com'
    }, {
        'id': 30,
        'firstname': 'Wayne',
        'lastname': 'Bennett',
        'email': 'wbennettt@amazonaws.com'
    }, {
        'id': 31,
        'firstname': 'Jesse',
        'lastname': 'Harrison',
        'email': 'jharrisonu@state.gov'
    }, {
        'id': 32,
        'firstname': 'Frances',
        'lastname': 'Ortiz',
        'email': 'fortizv@yolasite.com'
    }, {
        'id': 33,
        'firstname': 'Lori',
        'lastname': 'Perez',
        'email': 'lperezw@noaa.gov'
    }, {
        'id': 34,
        'firstname': 'Evelyn',
        'lastname': 'Duncan',
        'email': 'eduncanx@altervista.org'
    }, {
        'id': 35,
        'firstname': 'Joseph',
        'lastname': 'Mendoza',
        'email': 'jmendozay@topsy.com'
    }, {
        'id': 36,
        'firstname': 'Ann',
        'lastname': 'Gordon',
        'email': 'agordonz@imdb.com'
    }, {
        'id': 37,
        'firstname': 'Denise',
        'lastname': 'Johnston',
        'email': 'djohnston10@ft.com'
    }, {
        'id': 38,
        'firstname': 'Antonio',
        'lastname': 'Mcdonald',
        'email': 'amcdonald11@networkadvertising.org'
    }, {
        'id': 39,
        'firstname': 'Jonathan',
        'lastname': 'Gordon',
        'email': 'jgordon12@list-manage.com'
    }, {
        'id': 40,
        'firstname': 'William',
        'lastname': 'Moreno',
        'email': 'wmoreno13@moonfruit.com'
    }, {
        'id': 41,
        'firstname': 'Joshua',
        'lastname': 'Black',
        'email': 'jblack14@google.es'
    }, {
        'id': 42,
        'firstname': 'Terry',
        'lastname': 'Medina',
        'email': 'tmedina15@yelp.com'
    }, {
        'id': 43,
        'firstname': 'Margaret',
        'lastname': 'Cruz',
        'email': 'mcruz16@artisteer.com'
    }, {
        'id': 44,
        'firstname': 'Amanda',
        'lastname': 'Wright',
        'email': 'awright17@purevolume.com'
    }, {
        'id': 45,
        'firstname': 'Paula',
        'lastname': 'Martinez',
        'email': 'pmartinez18@gmpg.org'
    }, {
        'id': 46,
        'firstname': 'Terry',
        'lastname': 'Hughes',
        'email': 'thughes19@surveymonkey.com'
    }, {
        'id': 47,
        'firstname': 'Randy',
        'lastname': 'Carr',
        'email': 'rcarr1a@webeden.co.uk'
    }, {
        'id': 48,
        'firstname': 'Roger',
        'lastname': 'Miller',
        'email': 'rmiller1b@cafepress.com'
    }, {
        'id': 49,
        'firstname': 'Anna',
        'lastname': 'Barnes',
        'email': 'abarnes1c@un.org'
    }, {
        'id': 50,
        'firstname': 'Frank',
        'lastname': 'Crawford',
        'email': 'fcrawford1d@aol.com'
    }, {
        'id': 51,
        'firstname': 'David',
        'lastname': 'Price',
        'email': 'dprice1e@freewebs.com'
    }, {
        'id': 52,
        'firstname': 'Alice',
        'lastname': 'Carroll',
        'email': 'acarroll1f@theglobeandmail.com'
    }, {
        'id': 53,
        'firstname': 'Alice',
        'lastname': 'Schmidt',
        'email': 'aschmidt1g@si.edu'
    }, {
        'id': 54,
        'firstname': 'Shirley',
        'lastname': 'Crawford',
        'email': 'scrawford1h@naver.com'
    }, {
        'id': 55,
        'firstname': 'Lawrence',
        'lastname': 'Howell',
        'email': 'lhowell1i@sciencedaily.com'
    }, {
        'id': 56,
        'firstname': 'Sarah',
        'lastname': 'Morales',
        'email': 'smorales1j@yandex.ru'
    }, {
        'id': 57,
        'firstname': 'Richard',
        'lastname': 'Reyes',
        'email': 'rreyes1k@webs.com'
    }, {
        'id': 58,
        'firstname': 'Steve',
        'lastname': 'Boyd',
        'email': 'sboyd1l@yellowpages.com'
    }, {
        'id': 59,
        'firstname': 'Frank',
        'lastname': 'Wright',
        'email': 'fwright1m@telegraph.co.uk'
    }, {
        'id': 60,
        'firstname': 'Paula',
        'lastname': 'Brooks',
        'email': 'pbrooks1n@technorati.com'
    }, {
        'id': 61,
        'firstname': 'Justin',
        'lastname': 'Graham',
        'email': 'jgraham1o@liveinternet.ru'
    }, {
        'id': 62,
        'firstname': 'Sandra',
        'lastname': 'Gardner',
        'email': 'sgardner1p@toplist.cz'
    }, {
        'id': 63,
        'firstname': 'Walter',
        'lastname': 'Lopez',
        'email': 'wlopez1q@naver.com'
    }, {
        'id': 64,
        'firstname': 'Frances',
        'lastname': 'Garcia',
        'email': 'fgarcia1r@shareasale.com'
    }, {
        'id': 65,
        'firstname': 'Beverly',
        'lastname': 'Mills',
        'email': 'bmills1s@devhub.com'
    }, {
        'id': 66,
        'firstname': 'Peter',
        'lastname': 'Bishop',
        'email': 'pbishop1t@bloomberg.com'
    }, {
        'id': 67,
        'firstname': 'Dorothy',
        'lastname': 'Berry',
        'email': 'dberry1u@si.edu'
    }, {
        'id': 68,
        'firstname': 'Jeremy',
        'lastname': 'Wagner',
        'email': 'jwagner1v@rediff.com'
    }, {
        'id': 69,
        'firstname': 'Debra',
        'lastname': 'Black',
        'email': 'dblack1w@psu.edu'
    }, {
        'id': 70,
        'firstname': 'Keith',
        'lastname': 'Mendoza',
        'email': 'kmendoza1x@cbc.ca'
    }, {
        'id': 71,
        'firstname': 'Aaron',
        'lastname': 'Campbell',
        'email': 'acampbell1y@oracle.com'
    }, {
        'id': 72,
        'firstname': 'Brandon',
        'lastname': 'Gilbert',
        'email': 'bgilbert1z@japanpost.jp'
    }, {
        'id': 73,
        'firstname': 'Carol',
        'lastname': 'Harrison',
        'email': 'charrison20@youtube.com'
    }, {
        'id': 74,
        'firstname': 'Diana',
        'lastname': 'Simmons',
        'email': 'dsimmons21@edublogs.org'
    }, {
        'id': 75,
        'firstname': 'Jennifer',
        'lastname': 'Anderson',
        'email': 'janderson22@prlog.org'
    }, {
        'id': 76,
        'firstname': 'Norma',
        'lastname': 'Henry',
        'email': 'nhenry23@mozilla.org'
    }, {
        'id': 77,
        'firstname': 'Sarah',
        'lastname': 'Davis',
        'email': 'sdavis24@alexa.com'
    }, {
        'id': 78,
        'firstname': 'Stephanie',
        'lastname': 'Pierce',
        'email': 'spierce25@sina.com.cn'
    }, {
        'id': 79,
        'firstname': 'Elizabeth',
        'lastname': 'Payne',
        'email': 'epayne26@google.com.hk'
    }, {
        'id': 80,
        'firstname': 'Jonathan',
        'lastname': 'Coleman',
        'email': 'jcoleman27@salon.com'
    }, {
        'id': 81,
        'firstname': 'Timothy',
        'lastname': 'Sims',
        'email': 'tsims28@merriam-webster.com'
    }, {
        'id': 82,
        'firstname': 'Patrick',
        'lastname': 'Parker',
        'email': 'pparker29@marketwatch.com'
    }, {
        'id': 83,
        'firstname': 'Victor',
        'lastname': 'Lawrence',
        'email': 'vlawrence2a@bloglines.com'
    }, {
        'id': 84,
        'firstname': 'Kevin',
        'lastname': 'Shaw',
        'email': 'kshaw2b@dropbox.com'
    }, {
        'id': 85,
        'firstname': 'Amanda',
        'lastname': 'Taylor',
        'email': 'ataylor2c@blogger.com'
    }, {
        'id': 86,
        'firstname': 'Beverly',
        'lastname': 'Ramos',
        'email': 'bramos2d@edublogs.org'
    }, {
        'id': 87,
        'firstname': 'Brenda',
        'lastname': 'Arnold',
        'email': 'barnold2e@sciencedirect.com'
    }, {
        'id': 88,
        'firstname': 'Debra',
        'lastname': 'Fuller',
        'email': 'dfuller2f@arstechnica.com'
    }, {
        'id': 89,
        'firstname': 'Douglas',
        'lastname': 'Rose',
        'email': 'drose2g@wordpress.org'
    }, {
        'id': 90,
        'firstname': 'Virginia',
        'lastname': 'Turner',
        'email': 'vturner2h@over-blog.com'
    }, {
        'id': 91,
        'firstname': 'Anne',
        'lastname': 'Alvarez',
        'email': 'aalvarez2i@google.co.uk'
    }, {
        'id': 92,
        'firstname': 'Helen',
        'lastname': 'Mendoza',
        'email': 'hmendoza2j@ed.gov'
    }, {
        'id': 93,
        'firstname': 'Scott',
        'lastname': 'Murray',
        'email': 'smurray2k@wordpress.org'
    }, {
        'id': 94,
        'firstname': 'Martin',
        'lastname': 'Bishop',
        'email': 'mbishop2l@vinaora.com'
    }, {
        'id': 95,
        'firstname': 'Eugene',
        'lastname': 'Payne',
        'email': 'epayne2m@pen.io'
    }, {
        'id': 96,
        'firstname': 'Gregory',
        'lastname': 'Cole',
        'email': 'gcole2n@chicagotribune.com'
    }, {
        'id': 97,
        'firstname': 'Willie',
        'lastname': 'Powell',
        'email': 'wpowell2o@reference.com'
    }, {
        'id': 98,
        'firstname': 'John',
        'lastname': 'Graham',
        'email': 'jgraham2p@themeforest.net'
    }, {
        'id': 99,
        'firstname': 'Andrew',
        'lastname': 'Murray',
        'email': 'amurray2q@123-reg.co.uk'
    }, {
        'id': 100,
        'firstname': 'Jimmy',
        'lastname': 'Miller',
        'email': 'jmiller2r@army.mil'
    }];

    constructor() {

    }

    public listPersons(from: number, count: number, orderBy: ColumnOrder[]): Observable<TableResultsPage<Person>> {
        /*if (sort !== undefined) {
            this.persons.sort((person1: Person, person2: Person) => {
                if ('asc' === order) {
                    if (person1[sort] > person2[sort]) {
                        return 1;
                    }
                    if (person1[sort] < person2[sort]) {
                        return -1;
                    }
                } else {
                    if (person1[sort] < person2[sort]) {
                        return 1;
                    }
                    if (person1[sort] > person2[sort]) {
                        return -1;
                    }
                }
                return 0;
            });
        }*/
        const result = this.persons.slice(from, from + count);

        const pr = new TableResultsPage<Person>();
        pr.count = count;
        pr.from = from;
        pr.total = this.persons.length;
        pr.results = result;

        return Observable.of(pr);
    }

}
