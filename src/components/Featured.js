import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
import "./Featured.css";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h2>Explore top Crypto's like Bitcoin, Ethereum and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* Card 1 */}
        <div className="right">
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>
                {data[0].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[0].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>
                {data[1].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[1].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="top">
              <img src={data[7].image} alt="" />
            </div>
            <div>
              <h5>{data[7].name}</h5>
              <p>
                {data[7].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[7].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[7].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[7].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[7].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="top">
              <img src={data[10].image} alt="" />
            </div>
            <div>
              <h5>{data[10].name}</h5>
              <p>
                {data[10].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[10].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[10].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[10].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[10].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 5 */}
          <div className="card">
            <div className="top">
              <img src={data[13].image} alt="" />
            </div>
            <div>
              <h5>{data[13].name}</h5>
              <p>
                {data[13].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[13].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[13].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[13].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[13].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 6 */}
          <div className="card">
            <div className="top">
              <img src={data[17].image} alt="" />
            </div>
            <div>
              <h5>{data[17].name}</h5>
              <p>
                {data[17].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[17].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[17].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[17].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[17].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 7 */}
          <div className="card">
            <div className="top">
              <img src={data[29].image} alt="" />
            </div>
            <div>
              <h5>{data[29].name}</h5>
              <p>
                {data[29].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[29].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[29].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[29].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[29].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 8 */}
          <div className="card">
            <div className="top">
              <img src={data[31].image} alt="" />
            </div>
            <div>
              <h5>{data[31].name}</h5>
              <p>
                {data[31].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[31].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[31].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[31].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[31].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 9 */}
          <div className="card">
            <div className="top">
              <img src={data[48].image} alt="" />
            </div>
            <div>
              <h5>{data[48].name}</h5>
              <p>
                {data[48].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[48].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[48].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[48].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[48].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Card 10 */}
          <div className="card">
            <div className="top">
              <img src={data[96].image} alt="" />
            </div>
            <div>
              <h5>{data[96].name}</h5>
              <p>
                {data[96].current_price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                {data[96].market_cap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            {data[96].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {data[96].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[96].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
