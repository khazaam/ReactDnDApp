import React, { Children, Component, Fragment} from 'react';
import {Table, Button} from 'reactstrap' //wont find  automatically


class App extends Component {
    state = { isLoading : false,
    monsters : 
        [
            {
                "id":"1",
                "Name":"Megamonster1",
                "HitPoints":"300",
                "Armorclass":"16"
            },
            {
                "id":"2",
                "Name":"Megamonster2",
                "HitPoints":"300",
                "Armorclass":"16"
            },
            {
                "id":"3",
                "Name":"Megamonster3",
                "HitPoints":"300",
                "Armorclass":"16",
                "special_abilities": [
                    {
                        "name": "Amphibious",
                        "desc": "The aboleth can breathe air and water.",
                        "attack_bonus": 0
                      },
                      {
                        "name": "Mucous Cloud",
                        "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
                        "attack_bonus": 0
                      },
                      {
                        "name": "Probing Telepathy",
                        "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
                        "attack_bonus": 0
                      }
                ],
                "actions": [
                    {
                        "name": "Multiattack",
                        "desc": "The aboleth makes three tentacle attacks.",
                        "attack_bonus": 0
                      },
                      {
                        "name": "Tentacle",
                        "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
                        "attack_bonus": 9,
                        "damage_dice": "2d6",
                        "damage_bonus": 5
                      },
                      {
                        "name": "Tail",
                        "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
                        "attack_bonus": 9,
                        "damage_dice": "3d6",
                        "damage_bonus": 5
                      },
                      {
                        "name": "Enslave (3/day)",
                        "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
                        "attack_bonus": 0
                      }
                ],
                "legendary_actions":[
                    {
                        "name": "Detect",
                        "desc": "The aboleth makes a Wisdom (Perception) check.",
                        "attack_bonus": 0
                      },
                      {
                        "name": "Tail Swipe",
                        "desc": "The aboleth makes one tail attack.",
                        "attack_bonus": 0
                      },
                      {
                        "name": "Psychic Drain (Costs 2 Actions)",
                        "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
                        "attack_bonus": 0
                      }
                ]
                 
            }
        ]
    }


    render() { 

        const isLoading = this.state.isLoading;
        const Allmonsters = this.state.monsters
        

        if(isLoading)
        return(<div>Page is loading..</div>)

        //still missing the actions etc, those are nested objects
        let monsters = Allmonsters
        .map( monsters => 
            <tr key={monsters.id}>
                <td>{monsters.Name}</td>
                <td>{monsters.HitPoints}</td>
                <td>{monsters.Armorclass}</td>
            </tr>
            )

        return ( 
            //add this to the upper <td>{monsters.special_abilities}</td>
                //<td>{monsters.actions}</td>
                //<td>{monsters.legendary_actions}</td>
        //all content jsx cont
            <div className="container border border-secondary rounded center">

                <div className="row">
                    <div className="col-12">
                        <h4>Monster and such - Whee</h4>
                    </div>
                </div>

                <div className="row">
                    <div className=".col-12-12 center text-center">
                        <Table dark responsive striped bordered hover>
                            <thead>
                                <th>Name</th>
                                <th>HitPoints</th>
                                <th>Armorclass</th>
                                <th>Actions</th>
                                <th>Legendary_actions</th>
                                <th>special_abilities</th>
                            </thead>
                        <tbody>
                            {this.state.monsters.length === 0 ? <td colspan="9">Nani?!</td> : monsters}
                        </tbody>
                        </Table>
                    </div>
                </div>

            </div>

         );
    }
}
 
export default App;