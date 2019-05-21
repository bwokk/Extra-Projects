
var songs = [];

var Song = (function () {
  var globalId = 0;

  return function Song(title, duration, year, image, audio, info) {
    this.id = globalId++;
    this.title = title;
    this.duration = duration;
    this.year = year;
    this.image = image;
    this.audio = audio;
    this.info = info;
  }
})();

songs.push(new Song("Hometown Glory", "3:37", 2007, "IMG/Hometown_Glory.png", "Audio/Hometown.mp3", 'Hometown Glory" is the debut single by British singer Adele, released on 22 October 2007 in the United Kingdom. The song appears on her debut studio album 19 (2008). In 2008, the song was re-released as her fourth single. Adele wrote the song in 10 minutes after her mother tried to persuade her to leave her home suburb of West Norwood in London for university. "Hometown Glory" is the first song that Adele ever wrote.'));
songs.push(new Song("Chasing Pavements", "3:30", 2008, "IMG/Chasing_Pavements.jpg", "Audio/Chasing.mp3",'"Chasing Pavements" is a song by British singer Adele, from her debut album 19. It was the second single from the album, after "Hometown Glory". It was released digitally in Ireland on 13 January 2008 and entered the Irish singles chart at number 26 through download sales alone. Having received a physical release, the single then leaped 19 places to number seven, where it peaked. On 20 January, the single entered at number two in the UK singles chart on downloads alone. "Chasing Pavements" was the 27th best selling single of 2008 in the UK, with over 280,000 sales. It was Adeles first Billboard Hot 100 entry, and has sold over 1,200,000 digital copies as of October 2011. The B-side to the single is an acoustic cover of the Sam Cooke song "Thats It, I Quit, Im Movin On". "Chasing Pavements" won the Grammy Award for Best Female Pop Vocal Performance, and was nominated for the Grammy Award for Record of the Year and Grammy Award for Song of the Year.'));
songs.push(new Song("Cold Shoulder", "3:12", 2008, "IMG/Cold_Shoulder.jpg", "Audio/Cold.mp3",'"Cold Shoulder" is a song by British singer Adele, released from her debut album 19. It was released digitally in Ireland on 30 March 2008 and in the UK on 31 March 2008. This is the only song on the album to be produced by Mark Ronson. Ex-Jamiroquai bassist Stuart Zender plays on the song who is also part of Mark Ronsons touring band. Adele performed the song on Friday Night with Jools Holland on 8 February 2008 and on Saturday Night Live during the 18 October 2008 show. A remix by Basement Jaxx has also been receiving airplay and is digitally available.'));
songs.push(new Song("Make You Feel My Love", "3:32", 2007, "IMG/MakeYouFeelMyLove.jpg", "Audio/Make.mp3",'"Make You Feel My Love" is a song originally recorded by Bob Dylan for his 1997 album Time Out of Mind. In 2008, it was covered by Adele for her debut album, 19. It was released as the albums fourth and final single on October 27, 2008. The song was released on CD, vinyl, and digitally, peaking at #26 on the official UK Top 75 singles chart. The largest sales of her recording, however, came during 2010–11 when it peaked at number 4.'));
songs.push(new Song("Rolling in the Deep", "3:48", 2010, "IMG/Rolling.jpg", "Audio/Rolling.mp3", '"Rolling in the Deep" is a song recorded by British singer Adele for her second studio album, 21. It is the lead single and opening track on the album. The song was written by Adele and Paul Epworth. The singer herself describes it as a "dark blues-y gospel disco tune". The largest crossover hit in the United States from the past 25 years, "Rolling in the Deep" gained radio airplay from many different radio formats. It was first released on 29 November 2010 as the lead single from 21 in digital download format. The lyrics describe the emotions of a scorned lover.'));
songs.push(new Song("Someone Like You", "4:45", 2010, "IMG/Someone.jpg", "Audio/Someone.mp3", '"Someone like You" is a song by British singer Adele. It was written by Adele and Dan Wilson for her second studio album 21. It is the second single and final track on the album. The song was inspired by a broken relationship, and lyrically speaks of Adeles coming to terms with it. XL Recordings released the song as the second single from the album on 24 January 2011 in the United Kingdom and on 9 August 2011 in the United States. Accompanied only by a piano in the song (played by co-writer Wilson), Adele sings about the end of the relationship with her ex-boyfriend. The song received wide acclaim from music critics, who chose the song as a highlight of 21 and praised the lyrics, its simple sound and Adeles vocal performance.'));
songs.push(new Song("Set Fire to the Rain", "4:02", 2010, "IMG/SetFire.jpg", "Audio/Set.mp3", '"Set Fire to the Rain" is a song by English singer-songwriter Adele from her second studio album 21. Written by Adele and Fraser T Smith and produced by Smith, the power ballad was released as the second single from the album in Europe. It was released as the third single in the United Kingdom on 4 July 2011, where the song has peaked at number 11. The song has peaked at number one in Belgium, Poland, the Netherlands, the Czech Republic, Slovakia, and the United States. The song has charted within the top 10 of Austria, Canada, Denmark, Finland, France, Germany, Ireland, Italy, New Zealand, Norway, South Africa and Switzerland.'));
songs.push(new Song("Rumour Has It", "3:43", 2011, "IMG/Rumour.jpg", "Audio/Rumor.mp3", '"Rumour Has It" is a song by British singer Adele. The song was written by Adele and Ryan Tedder while the production was handled by Tedder. Adele has said the song was not inspired by the media but it was aimed at her friends who believed things they heard about her. It was the fourth single from 21 in the United States. The song received critical acclaim from critics, who praised Adeles voice and the songs "catchiness". Even without having been released as a single, the song charted on the Billboard Hot 100 at number 16 and topped the Triple A chart. In the Netherlands, the record was released as the fourth single from 21 after "Rolling in the Deep", "Set Fire to the Rain" and "Someone like You". The track received a Double Platinum certification by the RIAA for sales exceeding 2 million units in the US. It has been covered by Jeremih and by Glee cast during the episode "Mash Off" with another Adele song "Someone like You", and also by Katharine McPhee during the episode "The Cost of Art" from the TV series Smash. Adele added the song to the set list on her second worldwide tour Adele Live.'));
songs.push(new Song("Turning Tables", "4:10", 2011, "IMG/Turning.png", "Audio/Turning.mp3", '"Turning Tables" is a song by British singer Adele and the last single from her second studio album, 21. Conceived after an altercation with her former lover, the song was co-written by Adele and singer-songwriter Ryan Tedder, whilst the production was completed by Jim Abbiss. "Turning Tables" is a pop ballad with a soulful sound; its instrumentation consists of piano, "Broadway-worthy" strings and guitar.[1] Lyrically, the song describes a domestic dispute in which its narrator assumes a defensive stance against a manipulative ex-lover. XL Recordings sent the song to UK mainstream radio on 5 November 2011 as fifth single from 21 along with "Rumour Has It".'));
songs.push(new Song("Skyfall", "4:46", 2012, "IMG/Skyfall.png", "Audio/Skyfall.mp3", '"Skyfall" is the theme song of the 2012 James Bond film Skyfall, performed by British singer Adele. It was co-written by Adele and producer Paul Epworth and features orchestration by J. A. C. Redford. Film company Eon Productions invited the singer to work on the theme song in early 2011, a task that Adele accepted after reading the films script. While composing the song, Adele and Epworth aimed to capture the mood and style of the other Bond themes, including dark and moody lyrics descriptive of the films plot.'));
songs.push(new Song("Hello", "4:55", 2015, "IMG/Hello.png", "Audio/Hello.mp3", '"Hello" is a song by English singer Adele. It was released on 23 October 2015 by XL Recordings as the lead single from her third studio album, 25 (2015). Adele co-wrote the song with her producer, Greg Kurstin. "Hello" is a piano ballad with soul influences, and lyrics that discuss themes of nostalgia and regret. Upon release, the song was well received by music critics, who compared it favourably to Adeles previous work and praised the songs lyrics and Adeles vocals. It was recorded in London.'));
songs.push(new Song("When We Were Young", "4:51", 2016, "IMG/Young.png", "Audio/When.mp3", '"When We Were Young" is a song by British singer Adele. It was released on 22 January 2016 by XL Recordings as the second single from her third studio album, 25 (2015). Adele co-wrote the song with Tobias Jesso Jr., while production of the track was provided by Ariel Rechtshaid. "When We Were Young" is a soul ballad, with lyrics that talk about reminiscing past memories with a loved one. Upon release, the song received critical acclaim from music critics, who praised the songs lyrics and Adeles vocals'));
songs.push(new Song("Send My Love", "3:41", 2016, "IMG/SendMyLove.png", "Audio/SendMyLove.mp3", '"Send My Love (To Your New Lover)" is a song by English singer Adele from her third studio album, 25 (2015). It was written by Adele, Max Martin and Shellback, while production was provided by the latter two. The song was released to digital formats on 16 May 2016 by XL Recordings as the third single from the album. XL then released the song to mainstream radio the following day. "Send My Love" is a pop song with an uptempo, rhythmic sound, with the singer describing it as a "happy youre gone" song dedicated to an ex-boyfriend.'));
songs.push(new Song("Water Under the Bridge", "4:00", 2016, "IMG/Water.png", "Audio/Water.mp3", '"Water Under the Bridge" is a song recorded by English singer and songwriter Adele for her third studio album 25 (2015). The song was written by Adele Adkins and Greg Kurstin, while production of the song was provided by the latter. It was released as the fourth single from the album on 4 November 2016.[1] Lyrically, the track is about a critical point in a relationship and trying to figure out if your partner is in or out. Musically, the song is a mid-tempo disco-pop song, featuring an electro-drum beat and a tropical, trip hop riff.'));

console.log(songs);

console.log(songs[12].audio);

for (var i = 0; i < songs.length; i++) {

  $("#tblSongs").append("<tr><td>" + '<audio controls> <source src="' + songs[i].audio + '"type= "audio/mp3"></audio>' +
    "</td><td>" + songs[i].title + "</td>" +
    "<td>" + songs[i].duration + "</td>" +
    "<td>" + songs[i].year + "</td>" +
    "<td>" + 
    '<a class="waves-effect waves-light btn" href="#modal' + i + '"><i class="medium material-icons">info_outline</i></a>' + 
    "</td>" +
    '<td><div id="modal' + i + '" class="modal bottom-sheet">' +
    '<div class="modal-content">' +
      '<h1>' + songs[i].title + '</h1>' +
      '<p>' + songs[i].info + '</p>' +
      '<img id="modalIMG" src="' + songs[i].image + '">' +
    '</div>' +
    '<div class="modal-footer">' +
    '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>' +
    '</div></div></td></tr>')
};
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tblSongs");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

