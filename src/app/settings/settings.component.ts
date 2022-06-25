import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  documents: any;
  courses: any;

  showAddModal: boolean = false;
  showProfileAddModal: boolean = false;
  selectedCourse: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getCurrentSettings();
  }

  getCurrentSettings() {
    this.http.get<any>('http://localhost:8080/settings').subscribe((data) => {
      this.documents = data.courseFileLocations;
      this.courses = data.courseRequirements;
      this.selectedCourse = this.courses[0];

      //temp
      this.documents = [{
        "name": "Kung Fu Dunk",
        "version": "1.6.7"
      }, {
        "name": "Family Tree (L'arbre et la forêt)",
        "version": "0.8.4"
      }, {
        "name": "Pitch Perfect",
        "version": "8.0.9"
      }, {
        "name": "1969",
        "version": "7.8"
      }, {
        "name": "Highlander II: The Quickening",
        "version": "0.86"
      }, {
        "name": "Tungsten",
        "version": "0.25"
      }, {
        "name": "Thin Red Line, The",
        "version": "0.73"
      }, {
        "name": "Slam Dunk Ernest",
        "version": "0.39"
      }, {
        "name": "Crash Dive",
        "version": "0.9.6"
      }, {
        "name": "Secrets & Lies",
        "version": "0.3.7"
      }, {
        "name": "United",
        "version": "6.62"
      }, {
        "name": "Road Games (a.k.a. Roadgames)",
        "version": "0.26"
      }, {
        "name": "Student Prince in Old Heidelberg, The",
        "version": "8.57"
      }, {
        "name": "Leviathan",
        "version": "7.4.7"
      }, {
        "name": "All of Me",
        "version": "0.60"
      }, {
        "name": "Long Live Death (Viva la muerte)",
        "version": "5.3.3"
      }, {
        "name": "Sallah",
        "version": "1.3.2"
      }, {
        "name": "Six by Sondheim",
        "version": "8.3.2"
      }, {
        "name": "Amityville Curse, The",
        "version": "7.5.1"
      }, {
        "name": "Cold Light of Day, The",
        "version": "8.13"
      }, {
        "name": "Crying Game, The",
        "version": "0.35"
      }, {
        "name": "Crimson Permanent Assurance, The",
        "version": "0.4.4"
      }, {
        "name": "Paparazzi",
        "version": "0.6.8"
      }, {
        "name": "Bounty Hunters (Bail Enforcers)",
        "version": "0.4.4"
      }, {
        "name": "Babbitt",
        "version": "0.82"
      }, {
        "name": "Endless Summer, The",
        "version": "9.2"
      }, {
        "name": "Blueprint for Murder, A",
        "version": "0.6.7"
      }, {
        "name": "Carpool",
        "version": "6.9"
      }, {
        "name": "Red Chapel (Røde kapel)",
        "version": "0.71"
      }, {
        "name": "Rudo y Cursi (Rough and Vulgar)",
        "version": "9.3.7"
      }, {
        "name": "Riddick",
        "version": "0.46"
      }, {
        "name": "Crossing the Bridge",
        "version": "0.9.0"
      }, {
        "name": "Enchanted",
        "version": "5.3"
      }, {
        "name": "Friday the 13th Part V: A New Beginning",
        "version": "2.5"
      }, {
        "name": "Cheerleaders, The",
        "version": "5.9"
      }, {
        "name": "Running On Karma (Daai Zek Lou)",
        "version": "7.2"
      }, {
        "name": "Merchant of Venice, The",
        "version": "2.58"
      }, {
        "name": "Frozen",
        "version": "0.94"
      }, {
        "name": "Breakheart Pass",
        "version": "1.3.8"
      }, {
        "name": "Polly of the Circus",
        "version": "0.11"
      }, {
        "name": "Nine Months",
        "version": "6.1"
      }, {
        "name": "Mother of George",
        "version": "1.17"
      }, {
        "name": "Cemetery Man (Dellamorte Dellamore)",
        "version": "6.38"
      }, {
        "name": "Spy Kids: All the Time in the World in 4D",
        "version": "5.4"
      }, {
        "name": "The Outsider",
        "version": "0.98"
      }, {
        "name": "Weather Man, The",
        "version": "0.5.8"
      }, {
        "name": "Eggs",
        "version": "1.1.6"
      }, {
        "name": "Marfa Girl",
        "version": "4.8.0"
      }, {
        "name": "Sunes sommar",
        "version": "5.43"
      }, {
        "name": "Brasher Doubloon, The",
        "version": "0.3.4"
      }, {
        "name": "Offside",
        "version": "6.6"
      }, {
        "name": "César",
        "version": "4.4.0"
      }, {
        "name": "Zombies on Broadway",
        "version": "0.29"
      }, {
        "name": "Lessons of Darkness (Lektionen in Finsternis)",
        "version": "0.8.1"
      }, {
        "name": "Come September",
        "version": "0.14"
      }, {
        "name": "Everybody's Woman (La signora di tutti)",
        "version": "0.24"
      }, {
        "name": "Don Verdean",
        "version": "7.2"
      }, {
        "name": "Doll's House, A",
        "version": "0.78"
      }, {
        "name": "American Promise",
        "version": "3.8.0"
      }, {
        "name": "Last Night",
        "version": "8.4.5"
      }, {
        "name": "Claire of the Moon",
        "version": "1.1"
      }, {
        "name": "Pittsburgh",
        "version": "1.9.9"
      }, {
        "name": "Damnation (Karhozat)",
        "version": "8.4.3"
      }, {
        "name": "Lili's Apron",
        "version": "0.3.1"
      }, {
        "name": "In the Blood",
        "version": "2.5.2"
      }, {
        "name": "Perfect Couple, A",
        "version": "7.1.1"
      }, {
        "name": "Wedding Gift, The",
        "version": "0.20"
      }, {
        "name": "Private War of Major Benson, The",
        "version": "2.9"
      }, {
        "name": "Unconditional",
        "version": "3.4.7"
      }, {
        "name": "Sgt. Kabukiman N.Y.P.D.",
        "version": "6.6.0"
      }, {
        "name": "Enigma of Kaspar Hauser, The (a.k.a. Mystery of Kaspar Hauser, The) (Jeder für sich und Gott Gegen Alle)",
        "version": "2.4.5"
      }, {
        "name": "Footloose",
        "version": "6.6"
      }, {
        "name": "It's Christmastime Again, Charlie Brown",
        "version": "5.6"
      }, {
        "name": "Colour of Magic, The (Terry Pratchett's The Colour of Magic)",
        "version": "6.2"
      }, {
        "name": "Sister Act 2: Back in the Habit",
        "version": "0.9.8"
      }, {
        "name": "Misfortunates, The (De helaasheid der dingen)",
        "version": "6.65"
      }, {
        "name": "Charlie Victor Romeo",
        "version": "6.5"
      }, {
        "name": "Around the World in 80 Days",
        "version": "5.2"
      }, {
        "name": "Sex Positive",
        "version": "0.1.4"
      }, {
        "name": "Sketches of Frank Gehry",
        "version": "6.3.3"
      }, {
        "name": "House Party 3",
        "version": "5.0.4"
      }, {
        "name": "Great Happiness Space, The: Tale of an Osaka Love Thief",
        "version": "0.5.8"
      }, {
        "name": "Sun Also Rises, The (Tai yang zhao chang sheng qi)",
        "version": "9.7"
      }, {
        "name": "Taxi Blues",
        "version": "2.6.8"
      }, {
        "name": "Adrift in Tokyo (Tenten)",
        "version": "0.53"
      }, {
        "name": "Resurrection of the Little Match Girl (Sungnyangpali sonyeoui jaerim)",
        "version": "0.41"
      }, {
        "name": "Nicholas Nickleby",
        "version": "7.4"
      }, {
        "name": "Silentium",
        "version": "2.9"
      }, {
        "name": "Ski Patrol",
        "version": "0.2.6"
      }, {
        "name": "Big Miracle",
        "version": "0.6.1"
      }, {
        "name": "Frank McKlusky, C.I.",
        "version": "3.2"
      }, {
        "name": "Devil at 4 O'Clock, The",
        "version": "0.44"
      }, {
        "name": "International House",
        "version": "3.2.2"
      }, {
        "name": "I Was Born, But... (a.k.a. Children of Tokyo) (Otona no miru ehon - Umarete wa mita keredo)",
        "version": "3.71"
      }, {
        "name": "Fixed Bayonets!",
        "version": "2.98"
      }, {
        "name": "Head in the Clouds",
        "version": "7.09"
      }, {
        "name": "The Great Gatsby",
        "version": "0.2.2"
      }, {
        "name": "Love Walked In",
        "version": "0.6.1"
      }, {
        "name": "Dark Portals: The Chronicles of Vidocq  (Vidocq)",
        "version": "5.9.6"
      }, {
        "name": "Endeavour",
        "version": "0.32"
      }]

    });
  }

  handleFileDelete(event) {
    console.log(event.target.id);
    const formData = new FormData();
    const documentKey: string = event.target.id.replace('-delete', '');

    formData.append('key', documentKey);
    this.http
      .post('http://localhost:8080/deleteSetting', formData)
      .subscribe((data) => { });

    this.getCurrentSettings();
    window.location.reload();
  }

  handleFileChange(event) {
    const file: File = event.target.files[0];
    const documentKey: string = event.target.id;
    if (file) {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('key', documentKey);

      this.http
        .post('http://localhost:8080/editSettings', formData)
        .subscribe((data) => { });
    }

    this.getCurrentSettings();
    window.location.reload();
  }

  handleGeneralRequiredChange(checkbox) {
    const targetCourse = checkbox.target.value.split('|')[0];
    const targetDocument = checkbox.target.value.split('|')[1];
    const newValue = checkbox.target.checked;

    const formData = new FormData();

    formData.append('targetCourse', targetCourse);
    formData.append('targetDocument', targetDocument);
    formData.append('newValue', newValue);

    this.http
      .post('http://localhost:8080/updateRequiredGeneralDocument', formData)
      .subscribe((data) => { });
  }

  handleCandidateRequiredChange(checkbox) {
    const targetCourse = checkbox.target.value.split('|')[0];
    const targetDocument = checkbox.target.value.split('|')[1];
    const newValue = checkbox.target.checked;

    const formData = new FormData();

    formData.append('targetCourse', targetCourse);
    formData.append('targetDocument', targetDocument);
    formData.append('newValue', newValue);

    this.http
      .post('http://localhost:8080/updateRequiredCandidateDocument', formData)
      .subscribe((data) => { });
  }

  handleCourseProfileChange(event) {
    this.courses.forEach((element) => {
      if (element.name === event.target.value) {
        this.selectedCourse = element;
      }
    });
  }

  displayProfileAddModal(show: boolean) {
    this.showProfileAddModal = show
  }

  displayModal(show: boolean) {
    this.showAddModal = show;
  }
}
