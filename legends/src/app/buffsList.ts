import {Buff} from "./buff";

let buffsList = [
  {
    name: 'Attributes',
    buffs: [
      {
        name: 'Agility',
        cost: 1,
        maxAssignments: 10,
        assignments: 0,
        effect: 30,
        description: '30 to attribute per package',
        prefix: '+',
        suffix: ' to agility attribute',
      },
      {
        name: 'Constitution',
        cost: 1,
        maxAssignments: 10,
        assignments: 0,
        effect: 30,
        description: '30 to attribute per package',
        prefix: '+',
        suffix: ' to constitution attribute',
      },
      {
        name: 'Luck',
        cost: 1,
        maxAssignments: 10,
        assignments: 0,
        effect: 30,
        description: '30 to attribute per package',
        prefix: '+',
        suffix: ' to luck attribute',
      },
      {
        name: 'Precision',
        cost: 1,
        maxAssignments: 10,
        assignments: 0,
        effect: 30,
        description: '30 to attribute per package',
        prefix: '+',
        suffix: ' to precision attribute',
      },
      {
        name: 'Stamina',
        cost: 1,
        maxAssignments: 10,
        assignments: 0,
        effect: 30,
        description: '30 to attribute per package',
        prefix: '+',
        suffix: ' to stamina attribute',
      },
      {
        name: 'Strength',
        cost: 1,
        maxAssignments: 10,
        assignments: 0,
        effect: 30,
        description: '30 to attribute per package',
        prefix: '+',
        suffix: ' to strength attribute',
      },
    ]
  },
  {
    name: 'Combat',
    buffs: [
      {
        name: 'Action Cost Reduction',
        cost: 5,
        maxAssignments: 1,
        assignments: 0,
        effect: 9,
        description: '9% bonus per package in reducing all action costs',
        prefix: '',
        suffix: '% bonus in reducing all action costs',
      },
      {
        name: 'Critical Hit',
        cost: 5,
        maxAssignments: 1,
        assignments: 0,
        effect: 7,
        description: '7% bonus per package to critical hit chance',
        prefix: '',
        suffix: '% bonus to critical hit chance',
      },
      {
        name: 'Critical Hit Defense',
        cost: 5,
        maxAssignments: 1,
        assignments: 0,
        effect: 7,
        description: '7% bonus per package to critical hit defense',
        prefix: '',
        suffix: '% bonus to critical hit defense',
      },
      {
        name: 'Glancing Blow',
        cost: 5,
        maxAssignments: 1,
        assignments: 0,
        effect: 7,
        description: '7% bonus per package to glancing blow',
        prefix: '',
        suffix: '% bonus to glancing blow',
      },
    ]
  },
  {
    name: 'Miscellanious',
    buffs: [
      {
        name: 'Flush With Success',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 3,
        description: '3% increase per package in the amount of experience and GCW points earned (ground and space)',
        prefix: '',
        suffix: '% increased experience gain',
      },
      {
        name: 'Harvest Faire',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 1,
        description: '1% increase per package on the number of resources gathered with harvesters',
        prefix: '',
        suffix: '% increase on the number of resources gathered with harvesters',
      },
      {
        name: 'Healer',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 3,
        description: 'Increase the strength of your heals by 3% per package',
        prefix: 'Increase the strength of your healing by ',
        suffix: '%',
      },
      {
        name: 'Resilience',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 4,
        description: 'Reduce the amount of damage received by damage over time effects by 4% per package',
        prefix: 'Damage received by damage over time effects reduced by ',
        suffix: '%',
      },
      {
        name: 'Go With The Flow',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 5,
        description: 'Increase all movement rates by 5% per package',
        prefix: '',
        suffix: '% increase to all movement rates',
      },
      {
        name: 'Second Chance',
        cost: 2,
        maxAssignments: 4,
        assignments: 0,
        effect: 6,
        description: '6% chance per package to automatically heal damage when hit in combat',
        prefix: '',
        suffix: '% chance to automatically heal damage when struck in combat',
      },
      {
        name: 'Camouflage Detection',
        cost: 1,
        maxAssignments: 5,
        assignments: 0,
        effect: 20,
        description: '+20 increase in Camouflage Detection per package.',
        prefix: '+',
        suffix: ' increase in Camouflage Detection.',
      },
    ]
  },
  {
    name: 'Resistances',
    buffs: [
      {
        name: 'Elemental',
        cost: 1,
        maxAssignments: 5,
        assignments: 0,
        effect: 750,
        description: '750 to resistance per package',
        prefix: '+',
        suffix: ' to resistance',
      },
      {
        name: 'Energy',
        cost: 1,
        maxAssignments: 5,
        assignments: 0,
        effect: 750,
        description: '750 to resistance per package',
        prefix: '+',
        suffix: ' to Energy protection',
      },
      {
        name: 'Kinetic',
        cost: 1,
        maxAssignments: 5,
        assignments: 0,
        effect: 750,
        description: '750 to resistance per package',
        prefix: '+',
        suffix: ' to Kinetic protection',
      },
    ]
  },
  {
    name: 'Trade',
    buffs: [
      {
        name: 'Crafting Assembly',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 2,
        description: '+2 increase to Assembly and Experience gain for all types of crafting per package',
        prefix: '+',
        suffix: ' increase to Assembly and Experience gain for all types of crafting',
      },
      {
        name: 'Amazing Success Chance',
        cost: 5,
        maxAssignments: 2,
        assignments: 0,
        effect: 2,
        description: '2% bonus to Amazing Success crafting results per package',
        prefix: '',
        suffix: '% bonus to Amazing Success crafting results',
      },
      {
        name: 'Hand Sampling',
        cost: 2,
        maxAssignments: 5,
        assignments: 0,
        effect: 4,
        description: '4% increase to the number of resources gathered through hand sampling per package',
        prefix: '',
        suffix: '% increase to the number of resources gathered through hand sampling',
      },
      {
        name: 'Reverse Engineering Efficiency',
        cost: 5,
        maxAssignments: 2,
        assignments: 0,
        effect: 20,
        description: '+20 increase in Reverse Engineering Efficiency per package.',
        prefix: '+',
        suffix: ' increase in Reverse Engineering Efficiency',
      },
    ]
  },
];

export default buffsList;
