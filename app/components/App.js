import React from 'react'
import Footer from './presentation/Footer'
import FilteredKnightList from './container/FilteredKnightList'
import AddKnightToTournament from './container/AddKnightToTournament'

const App = () => (
    <div>
        <AddKnightToTournament />
        <FilteredKnightList />
        <Footer />
    </div>
)

export default App