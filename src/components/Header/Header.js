import React from 'react'
import Coin1 from "../../assets/img/coin/1.png"
import Coin2 from "../../assets/img/coin/2.png"
import Coin3 from "../../assets/img/coin/3.png"
import Coin4 from "../../assets/img/coin/4.png"
import Coin5 from "../../assets/img/coin/5.png"
import Coin6 from "../../assets/img/coin/6.png"
import Coin7 from "../../assets/img/coin/7.png"
import Coin8 from "../../assets/img/coin/8.png"
import BannerBg2 from "../../assets/img/banner-bg-2.png"

export default function Header() {
  return (
    <div>
    <div className="banner headerBanner" id="transfer" >
        <div className="man">
            <img src={Coin1} alt="" className="coin-1" />
            <img src={Coin2} alt="" className="coin-2" />
            <img src={Coin3} alt="" className="coin-3" />
            <img src={Coin4} alt="" className="coin-4" />
            <img src={Coin5} alt="" className="coin-5" />
            <img src={Coin6} alt="" className="coin-6" />
            <img src={Coin7} alt="" className="coin-7" />
            <img src={Coin8} alt="" className="coin-8" />
            <img className="bg-sape-1" src={BannerBg2} alt="" />
        </div>
        <div className="hero-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <div className="banner-content">
                            <h3 className="subtitle">Cryptocurrency Made Easy.</h3>
                            <h1 className="head">Crypto Into Your Bank</h1>
                            <p className="text">
                                Acquire most competitive rates for your cryptocurrency and instantly transfer into your
                                Bank.
                            </p>

                            <div className="vide">
                                <div className="video-box">
                                    <div className="video-img">
                                        <a className="youtube-video mfp-iframe video-play-btn video-icon"
                                            href="https://www.youtube.com/watch?v=4DCTTrGjGU4">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                    <div className="video-text">
                                        <p className="text">Watch Video Now</p>
                                        <span><i className="far fa-clock"></i> 2:32 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <div className="right-box">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Account Number</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Pay ID</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <div className="exchange">
                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Account Name"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="BSB" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Account No."
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Description"
                                                                className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="$ 10,000"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="0.66780"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <div className="selector">
                                                                <div className="coin">
                                                                    <img src="./assets/img/btc.png" alt="" />
                                                                    <div className="language-select">
                                                                        <select className="select-bar">
                                                                            <option value="">BTC</option>
                                                                            <option value="">USD</option>
                                                                            <option value="">BTC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <span className="rate">1 USD = 0.00008544 BTC</span>
                                        </div>
                                        <div className="button-box">
                                            <a href="#" className="button button-1">Get Start Now !</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <div className="exchange">
                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Account Name"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="BSB" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Account No."
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Description"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="$ 10,000"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="0.66780"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <div className="selector">
                                                                <div className="coin">
                                                                    <img src="./assets/img/btc.png" alt="" />
                                                                    <div className="language-select">
                                                                        <select className="select-bar">
                                                                            <option value="">BTC</option>
                                                                            <option value="">USD</option>
                                                                            <option value="">BTC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <span className="rate">1 USD = 0.00008544 BTC</span>
                                        </div>
                                        <div className="button-box">
                                            <a href="#" className="button button-1">Get Start Now !</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
