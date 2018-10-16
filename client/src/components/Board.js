import React from 'react'
import { Grid, Button, Divider } from 'semantic-ui-react'
import Dice from './Dice'

const Board = ({roll, dice, rollDice}) => (
<Grid>
    <Grid.Row>
    <Button
    fluid
    onClick={rollDice}
    >
    Roll
    </Button>
    <Grid.Column width={16}>
    <Divider hidden />
    </Grid.Column>
    { dice.map ( (d, i)=> <Dice key={i} value={d} /> )}
    </Grid.Row>
</Grid>
 
)

export default Board