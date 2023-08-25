import React, { useState } from "react"

const Context = React.createContext({})

export function ContextProvider ({ children }) {
    const [loadingPodcasts, setLoadingPodcasts] = useState(false)
    const [loadingPodcast, setLoadingPodcast] = useState(false)
    const [loadingEpisodes, setLoadingEpisodes] = useState(false)
    return <Context.Provider value={{
        loadingPodcasts,
        setLoadingPodcasts,
        loadingPodcast,
        setLoadingPodcast,
        loadingEpisodes,
        setLoadingEpisodes
    }}>
        {children}
    </Context.Provider>
}

export default Context