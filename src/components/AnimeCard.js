import React from "react";

const AnimeCard=({data}) =>(
    <div className="card-container">
          {data.data.map(anime => {
              let {
                  titles,
                  genres,
                  descriptions,
                  trailer_url,
                  episodes_count,
                  season_year,
                  score,
              } = anime.documents
              return(
                  <div key={anime.anilist_id}>
                      <h1 className="card-title">{titles.en}</h1>
                      <p>{genres}</p>
                      <p className="card-descriptions">{descriptions.substring(0, 150)}...</p>
                      <p>{trailer_url}</p>
                      <p>{episodes_count}</p>
                      <p>{season_year}</p>
                      <p className="card-rating">{score}</p>
                  </div>
              )
          })}
      </div>
)

export default AnimeCard;