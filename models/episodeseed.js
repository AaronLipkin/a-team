const express = require('express');
const router = express.Router();

const episodeInfo = require('../models/characters.js');

const newEpisodeInfo = [
	{ episodeNumOverall: 1,
    episodeNum: 1,
    season: 1,
    title:'Mexican Slayride',
    originalAirDate: new Date(83, 1, 23);
  },
  {
    episodeNumOverall: 2,
    episodeNum: 2,
    season: 1,
    title:'Mexican Slayride',
    originalAirDate: new Date(83, 1, 23);
  },
  {
    episodeNumOverall: 3,
    episodeNum: 3,
    season: 1,
    title:'Children of Jamestown',
    originalAirDate: new Date(83, 1, 30);
  },
  {
    episodeNumOverall: 4,
    episodeNum: 4,
    season: 1,
    title:'Pros and Cons',
    originalAirDate: new Date(83, 2, 8);
  },
  {
    episodeNumOverall: 5,
    episodeNum: 5,
    season: 1,
    title:'A Small and Deadly War',
    originalAirDate: new Date(83, 2, 15);
  },
  {
    episodeNumOverall: 6,
    episodeNum: 6,
    season: 1,
    title:'Black Day at Bad Rock',
    originalAirDate: new Date(83, 2, 22);
  },
  {
    episodeNumOverall: 7,
    episodeNum: 7,
    season: 1,
    title:'The Rabbit Who Ate Las Vegas',
    originalAirDate: new Date(83, 3, 1);
  },
  {
    episodeNumOverall: 8,
    episodeNum: 8,
    season: 1,
    title:'The Out-of-Towners',
    originalAirDate: new Date(83, 3, 15);
  },
  {
    episodeNumOverall: 9,
    episodeNum: 9,
    season: 1,
    title:'Holiday in the Hills',
    originalAirDate: new Date(83, 3, 22);
  },
  {
    episodeNumOverall: 10,
    episodeNum: 10,
    season: 1,
    title:'West Coast Turnaround',
    originalAirDate: new Date(83, 4, 5);
  },
  {
    episodeNumOverall: 11,
    episodeNum: 11,
    season: 1,
    title:'One More Time',
    originalAirDate: new Date(83, 4, 12);
  },
  {
    episodeNumOverall: 12,
    episodeNum: 12,
    season: 1,
    title:'Till Death Do Us Part',
    originalAirDate: new Date(83, 4, 12);
  },
  {
    episodeNumOverall: 13,
    episodeNum: 13,
    season: 1,
    title:'The Beast from the Belly of a Boeing',
    originalAirDate: new Date(83, 5, 3);
  },
  {
    episodeNumOverall: 14,
    episodeNum: 14,
    season: 1,
    title:'A Nice Place to Visit',
    originalAirDate: new Date(83, 5, 10);
  },
  {
    episodeNumOverall: 15,
    episodeNum: 1,
    season: 2,
    title:"Diamonds 'n' Dust",
    originalAirDate: new Date(83, 9, 20);
  },
  {
    episodeNumOverall: 16,
    episodeNum: 2,
    season: 2,
    title:'Recipe for Heavy Bread',
    originalAirDate: new Date(83, 9, 27);
  },
  {
    episodeNumOverall: 17,
    episodeNum: 3,
    season: 2,
    title:'The Only Church in Town',
    originalAirDate: new Date(83, 10, 11);
  },
  {
    episodeNumOverall: 18,
    episodeNum: 4,
    season: 2,
    title:'Bad Time on the Border',
    originalAirDate: new Date(83, 10, 18);
  },
  {
    episodeNumOverall: 19,
    episodeNum: 5,
    season: 2,
    title:"When You Comin' Back, Range Rider?",
    originalAirDate: new Date(83, 10, 25);
  },
  {
    episodeNumOverall: 20,
    episodeNum: 6,
    season: 2,
    title:"When You Comin' Back, Range Rider?",
    originalAirDate: new Date(83, 10, 25);
  },
  {
    episodeNumOverall: 21,
    episodeNum: 7,
    season: 2,
    title:'The Taxocab Wars',
    originalAirDate: new Date(83, 11, 1);
  },
  {
    episodeNumOverall: 22,
    episodeNum: 8,
    season: 2,
    title:'Labor Pains',
    originalAirDate: new Date(83, 11, 8);
  },
  {
    episodeNumOverall: 23,
    episodeNum: 9,
    season: 2,
    title:"There's Always a Catch",
    originalAirDate: new Date(83, 11, 15);
  },
  {
    episodeNumOverall: 24,
    episodeNum: 10,
    season: 2,
    title:'Water, Water Everywhere',
    originalAirDate: new Date(83, 11, 22);
  },
  {
    episodeNumOverall: 25,
    episodeNum: 11,
    season: 2,
    title:'Steel',
    originalAirDate: new Date(83, 11, 29);
  },
  {
    episodeNumOverall: 26,
    episodeNum: 12,
    season: 2,
    title:'The White Ballot',
    originalAirDate: new Date(83, 12, 6);
  },
  {
    episodeNumOverall: 27,
    episodeNum: 13,
    season: 2,
    title:'The Maltese Cow',
    originalAirDate: new Date(83, 12, 13);
  },
  {
    episodeNumOverall: 28,
    episodeNum: 14,
    season: 2,
    title:'In Plane Sight',
    originalAirDate: new Date(84, 1, 3);
  },
  {
    episodeNumOverall: 29,
    episodeNum: 15,
    season: 2,
    title:'The Battle of Bel Air',
    originalAirDate: new Date(84, 1, 10);
  },
  {
    episodeNumOverall: 30,
    episodeNum: 16,
    season: 2,
    title:'Say It With Bullets',
    originalAirDate: new Date(84, 1, 17);
  },
  {
    episodeNumOverall: 31,
    episodeNum: 17,
    season: 2,
    title:'Pure-Dee Poison',
    originalAirDate: new Date(84, 1, 31);
  },
  {
    episodeNumOverall: 32,
    episodeNum: 18,
    season: 2,
    title:"It's a Desert Out There",
    originalAirDate: new Date(84, 2, 7);
  },
  {
    episodeNumOverall: 33,
    episodeNum: 19,
    season: 2,
    title:'Chopping Spree',
    originalAirDate: new Date(83, 2, 14);
  },
  {
    episodeNumOverall: 34,
    episodeNum: 20,
    season: 2,
    title:'Harder Than It Looks',
    originalAirDate: new Date(84, 2, 21);
  },
  {
    episodeNumOverall: 35,
    episodeNum: 21,
    season: 2,
    title:'Deadly Maneuvers',
    originalAirDate: new Date(84, 2, 28);
  },
  {
    episodeNumOverall: 36,
    episodeNum: 22,
    season: 2,
    title:'Semi-Friendly Persuasion',
    originalAirDate: new Date(84, 5, 8);
  },
  {
    episodeNumOverall: 37,
    episodeNum: 23,
    season: 2,
    title:"Curtain Call",
    originalAirDate: new Date(84, 5, 15);
  },
  {
    episodeNumOverall: 38,
    episodeNum: 1,
    season: 3,
    title:"Bullets and Bikinis",
    originalAirDate: new Date(84, 9, 18);
  },
  {
    episodeNumOverall: 39,
    episodeNum: 2,
    season: 3,
    title:"The Bend in the River Part I",
    originalAirDate: new Date(84, 9, 25);
  },
  {
    episodeNumOverall: 40,
    episodeNum: 3,
    season: 3,
    title:"The Bend in the River Part II",
    originalAirDate: new Date(84, 9, 25);
  },
  {
    episodeNumOverall: 41,
    episodeNum: 4,
    season: 3,
    title:"Fire",
    originalAirDate: new Date(84, 10, 2);
  },
  {
    episodeNumOverall: 42,
    episodeNum: 5,
    season: 3,
    title:"Timber!",
    originalAirDate: new Date(84, 10, 16);
  },
  {
    episodeNumOverall: 43,
    episodeNum: 6,
    season: 3,
    title:"Double Heat",
    originalAirDate: new Date(84, 10, 23);
  },
  {
    episodeNumOverall: 44,
    episodeNum: 7,
    season: 3,
    title:"Trouble on Wheels",
    originalAirDate: new Date(84, 10, 30);
  },
  {
    episodeNumOverall: 45,
    episodeNum: 8,
    season: 3,
    title:"The Island",
    originalAirDate: new Date(84, 11, 13);
  },
  {
    episodeNumOverall: 46,
    episodeNum: 9,
    season: 3,
    title:"Showdown!",
    originalAirDate: new Date(84, 11, 20);
  },
  {
    episodeNumOverall: 47,
    episodeNum: 10,
    season: 3,
    title:"Sheriffs of Rivertown",
    originalAirDate: new Date(84, 11, 27);
  },
  {
    episodeNumOverall: 48,
    episodeNum: 11,
    season: 3,
    title:"The Bells of St. Mary's",
    originalAirDate: new Date(84, 12, 4);
  },
  {
    episodeNumOverall: 49,
    episodeNum: 12,
    season: 3,
    title:"Hot Styles",
    originalAirDate: new Date(84, 12, 11);
  },
  {
    episodeNumOverall: 50,
    episodeNum: 13,
    season: 3,
    title:"Breakout!",
    originalAirDate: new Date(84, 12, 18);
  },
  {
    episodeNumOverall: 51,
    episodeNum: 14,
    season: 3,
    title:"Cup A' Joe",
    originalAirDate: new Date(85, 1, 8);
  },
  {
    episodeNumOverall: 52,
    episodeNum: 15,
    season: 3,
    title:"The Big Squeez",
    originalAirDate: new Date(85, 1, 15);
  },
  {
    episodeNumOverall: 53,
    episodeNum: 16,
    season: 3,
    title:"Champ!",
    originalAirDate: new Date(85, 1, 22);
  },
  {
    episodeNumOverall: 54,
    episodeNum: 17,
    season: 3,
    title:"Skins",
    originalAirDate: new Date(85, 1, 29);
  },
  {
    episodeNumOverall: 55,
    episodeNum: 18,
    season: 3,
    title:"Road Games",
    originalAirDate: new Date(85, 2, 5);
  },
  {
    episodeNumOverall: 56,
    episodeNum: 19,
    season: 3,
    title:"Moving Targets",
    originalAirDate: new Date(85, 2, 12);
  },
  {
    episodeNumOverall: 57,
    episodeNum: 20,
    season: 3,
    title:"Knights of the Road",
    originalAirDate: new Date(85, 2, 26);
  },
  {
    episodeNumOverall: 58,
    episodeNum: 21,
    season: 3,
    title:"Wate Em!",
    originalAirDate: new Date(85, 3, 5);
  },
  {
    episodeNumOverall: 59,
    episodeNum: 22,
    season: 3,
    title:"Bounty",
    originalAirDate: new Date(85, 4, 2);
  },
  {
    episodeNumOverall: 60,
    episodeNum: 23,
    season: 3,
    title:"Beverly Hills Assault",
    originalAirDate: new Date(85, 4, 9);
  },
  {
    episodeNumOverall: 61,
    episodeNum: 24,
    season: 3,
    title:"Trouble Brewing",
    originalAirDate: new Date(85, 5, 7);
  },
  {
    episodeNumOverall: 62,
    episodeNum: 25,
    season: 3,
    title:"Incident at Crystal Lake",
    originalAirDate: new Date(85, 5, 14);
  },
  {
    episodeNumOverall: 63,
    episodeNum: 1,
    season: 4,
    title:"Judgement Day Part I",
    originalAirDate: new Date(85, 9, 24);
  },
  {
    episodeNumOverall: 64,
    episodeNum: 2,
    season: 4,
    title:"Judgement Day Part II",
    originalAirDate: new Date(85, 9, 24);
  },
  {
    episodeNumOverall: 65,
    episodeNum: 3,
    season: 4,
    title:"Where Is the Monster When You Need Him?",
    originalAirDate: new Date(85, 10, 1);
  },
  {
    episodeNumOverall: 66,
    episodeNum: 4,
    season: 4,
    title:"Lease with an Option to Die",
    originalAirDate: new Date(85, 10, 22);
  },
  {
    episodeNumOverall: 67,
    episodeNum: 5,
    season: 4,
    title:"The Road to Hope",
    originalAirDate: new Date(85, 10, 29);
  },
  {
    episodeNumOverall: 68,
    episodeNum: 6,
    season: 4,
    title:"The Heart of Rock N' Roll",
    originalAirDate: new Date(85, 11, 5);
  },
  {
    episodeNumOverall: 69,
    episodeNum: 7,
    season: 4,
    title:"Body Slam",
    originalAirDate: new Date(85, 11, 12);
  },
  {
    episodeNumOverall: 70,
    episodeNum: 8,
    season: 4,
    title:"Blood Sweat and Cheers",
    originalAirDate: new Date(85, 11, 19);
  },
  {
    episodeNumOverall: 71,
    episodeNum: 9,
    season: 4,
    title:"Mind Games",
    originalAirDate: new Date(85, 11, 26);
  },
  {
    episodeNumOverall: 72,
    episodeNum: 10,
    season: 4,
    title:"There Goes the Neighborhood",
    originalAirDate: new Date(85, 12, 3);
  },
  {
    episodeNumOverall: 73,
    episodeNum: 11,
    season: 4,
    title:"The Doctor is Out",
    originalAirDate: new Date(85, 12, 10);
  },
  {
    episodeNumOverall: 74,
    episodeNum: 12,
    season: 4,
    title:"Uncle Buckle-Up",
    originalAirDate: new Date(85, 12, 17);
  },
  {
    episodeNumOverall: 75,
    episodeNum: 13,
    season: 4,
    title:"Wheel of Fortune",
    originalAirDate: new Date(86, 1, 14);
  },
  {
    episodeNumOverall: 76,
    episodeNum: 14,
    season: 4,
    title:"The A-Team Is Coming, the A-Team Is Coming",
    originalAirDate: new Date(86, 1, 21);
  },
  {
    episodeNumOverall: 77,
    episodeNum: 15,
    season: 4,
    title:"Members Only",
    originalAirDate: new Date(86, 1, 28);
  },
  {
    episodeNumOverall: 78,
    episodeNum: 16,
    season: 4,
    title:"Cowboy George",
    originalAirDate: new Date(86, 2, 11);
  },
  {
    episodeNumOverall: 79,
    episodeNum: 17,
    season: 4,
    title:"Waiting for Insane Wayne",
    originalAirDate: new Date(86, 2, 18);
  },
  {
    episodeNumOverall: 80,
    episodeNum: 18,
    season: 4,
    title:"The Duke of Whispering Pines",
    originalAirDate: new Date(86, 2, 25);
  },
  {
    episodeNumOverall: 81,
    episodeNum: 19,
    season: 4,
    title:"Beneath the Surface",
    originalAirDate: new Date(86, 3, 4);
  },
  {
    episodeNumOverall: 82,
    episodeNum: 20,
    season: 4,
    title:"Mission of Peace",
    originalAirDate: new Date(86, 3, 11);
  },
  {
    episodeNumOverall: 83,
    episodeNum: 21,
    season: 4,
    title:"The Trouble with Harry",
    originalAirDate: new Date(86, 3, 25);
  },
  {
    episodeNumOverall: 84,
    episodeNum: 22,
    season: 4,
    title:"A Little Town With an Accent",
    originalAirDate: new Date(86, 5, 6);
  },
  {
    episodeNumOverall: 85,
    episodeNum: 23,
    season: 4,
    title:"The Sound of Thunder",
    originalAirDate: new Date(86, 5, 13);
  },
  {
    episodeNumOverall: 86,
    episodeNum: 1,
    season: 5,
    title:"Dishpan Man, The Court Martial Part I",
    originalAirDate: new Date(86, 9, 26);
  },
  {
    episodeNumOverall: 87,
    episodeNum: 2,
    season: 5,
    title:"Trial by Fire, The Court Martial Part II",
    originalAirDate: new Date(86, 10, 3);
  },
  {
    episodeNumOverall: 88,
    episodeNum: 3,
    season: 5,
    title:"Firing Line, The Court Martial Part III",
    originalAirDate: new Date(86, 10, 10);
  },
  {
    episodeNumOverall: 89,
    episodeNum: 4,
    season: 5,
    title:"Quaterback Sneak",
    originalAirDate: new Date(86, 10, 17);
  },
  {
    episodeNumOverall: 90,
    episodeNum: 5,
    season: 5,
    title:"The Theory of Revolution",
    originalAirDate: new Date(86, 10, 24);
  },
  {
    episodeNumOverall: 91,
    episodeNum: 6,
    season: 5,
    title:"The Say UNCLE Affair",
    originalAirDate: new Date(86, 10, 31);
  },
  {
    episodeNumOverall: 92,
    episodeNum: 7,
    season: 5,
    title:"Alive at Five",
    originalAirDate: new Date(86, 11, 7);
  },
  {
    episodeNumOverall: 93,
    episodeNum: 8,
    season: 5,
    title:"Family Reunion",
    originalAirDate: new Date(86, 11, 14);
  },
  {
    episodeNumOverall: 94,
    episodeNum: 9,
    season: 5,
    title:"Point of No Return",
    originalAirDate: new Date(86, 11, 18);
  },
  {
    episodeNumOverall: 95,
    episodeNum: 10,
    season: 5,
    title:"The Crystal Skull",
    originalAirDate: new Date(86, 11, 28);
  },
  {
    episodeNumOverall: 96,
    episodeNum: 11,
    season: 5,
    title:"The Spy Who Mugged Me",
    originalAirDate: new Date(86, 12, 2);
  },
  {
    episodeNumOverall: 97,
    episodeNum: 12,
    season: 5,
    title:"The Grey Team",
    originalAirDate: new Date(86, 12, 30);
  },
  {
    episodeNumOverall: 98,
    episodeNum: 13,
    season: 5,
    title:"Without Reservations",
    originalAirDate: new Date(87, 3, 8);
  }
];
  router.get('/', (req, res)=>{
    characterInfo.create(newCharacterInfo, function(err){
      if(err){
        console.log(err);
      res.send('Error seeding characters');
    }else{
      console.log('Seeding Characters successful');
      res.redirect('/');
    }
    });
  });
  module.exports = router;
