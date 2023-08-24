import { useEffect, useState } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

export function useFetchPodcasts() {
  const [podcastsData, setPodcastsData] = useState([]);
  const [podcastsLoading, setPodcastsLoading] = useState(true);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const res = await axios.get("https://api.allorigins.win/raw?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
        setPodcastsData(res.data);
      } catch (err){
        console.log(err)
      } finally {
        setPodcastsLoading(false);
      }
    }
    getPodcasts();
  }, []);
  return { podcastsData, podcastsLoading }
}

export function useFetchPodcast(podcastId) {
  const [podcastData, setPodcastData] = useState([]);
  const [podcastLoading, setPodcastLoading] = useState(true);
  const [episodesData, setEpisodesData] = useState([]);
  const [episodesLoading, setEpisodesLoading] = useState(true);
  const [errorData, setErrorData] = useState([]);

  useEffect(() => {
    const getPodcast = async () => {
      try {
        const resPodcast = await axios.get(`https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${podcastId}`)
        setPodcastData(resPodcast.data)
        const resEpisodesXML = await axios.get(`https://api.allorigins.win/raw?url=${resPodcast.data.results[0].feedUrl}`)
        const resEpisodesJSON = new XMLParser().parseFromString(resEpisodesXML.data)
        setEpisodesData(resEpisodesJSON)
      } catch (err){
        console.log(err)
        setErrorData(err)
      } finally {
        setPodcastLoading(false)
        setEpisodesLoading(false)
      }
    }
    getPodcast();
  }, [podcastId]);
  return { podcastData, podcastLoading, episodesData, episodesLoading, errorData }
}