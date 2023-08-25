import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import Context from '../context/Context'

export function useFetchPodcasts() {
  const [podcastsData, setPodcastsData] = useState([])
  const { setLoadingPodcasts } = useContext(Context)

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        setLoadingPodcasts(true)
        const res = await axios.get("https://api.allorigins.win/raw?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
        setPodcastsData(res.data)
      } catch (err){
        console.log(err)
      } finally {
        setLoadingPodcasts(false)
      }
    }
    getPodcasts();
  }, [setLoadingPodcasts])

  return { podcastsData }
}

export function useFetchPodcast(podcastId) {
  const [podcastData, setPodcastData] = useState([])
  const [episodesData, setEpisodesData] = useState([])
  const { setLoadingPodcast, setLoadingEpisodes } = useContext(Context)

  useEffect(() => {
    const getPodcast = async () => {
      try {
        setLoadingPodcast(true)
        setLoadingEpisodes(true)
        const resPodcast = await axios.get(`https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${podcastId}`)
        setPodcastData(resPodcast.data)
        const resEpisodesXML = await axios.get(`https://api.allorigins.win/raw?url=${resPodcast.data.results[0].feedUrl}`)
        const resEpisodesJSON = new XMLParser().parseFromString(resEpisodesXML.data)
        setEpisodesData(resEpisodesJSON)
      } catch (err){
        console.log(err)
      } finally {
        setLoadingPodcast(false)
        setLoadingEpisodes(false)
      }
    }
    getPodcast();
  }, [podcastId, setLoadingPodcast, setLoadingEpisodes])

  return { podcastData, episodesData }
}