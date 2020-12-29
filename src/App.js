import React from "react";
// import XLSX from "xlsx";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

import Home from "./components/Home";
import Overview from "./components/flashcard-help/Overview";
import Flashview from "./components/flashcard-help/Flashview";
import Charts from "./components/flashcard-help/Charts";
import BookmarkOptions from "./components/flashcard-help/BookmarkOptions";
import DimentionsViews from "./components/flashcard-help/DimentionsViews";
import ExportOptions from "./components/flashcard-help/ExportOptions";
import FlashcubeSliceDice from "./components/flashcard-help/FlashcubeSliceDice";
import SlicersBoard from "./components/flashcard-help/SlicersBoard";
import DataStewardsList from "./components/sinergi-data-stewards/DataStewardsList";
import MarketDefinitionDcv from "./components/market-definition/MarketDefinitionDcv";
import MarketDefinitionChc from "./components/market-definition/MarketDefinitionChc";
// import MarketDefinitionDup from "./components/market-definition/MarketDefinitionDup";
import MarketDefinitionEp from "./components/market-definition/MarketDefinitionEp";
import MarketDefinitionGz from "./components/market-definition/MarketDefinitionGz";
import MarketDefinitionTgm from "./components/market-definition/MarketDefinitionTgm";
import MarketDefinitionPast from "./components/market-definition/MarketDefinitionPast";
import DataPanel from "./components/sinergi-data-panel/DataPanel";
import PriceDetail from "./components/sinergi-data-panel/PriceDetail";

import FlashcardDimentions from "./components/glossary/FlashcardDimentions";
import FlashcardMetrics from "./components/glossary/FlashcardMetrics";
import FlashcubeDimentions from "./components/glossary/FlashcubeDimentions";
import FlashcubeMetrics from "./components/glossary/FlashcubeMetrics";
import VolumeCalculations from "./components/glossary/VolumeCalculations";

import Troubleshooting from "./components/faq/Troubleshoot";
import Faqs from "./components/faq/Faqs";
import TipsAndTricks from "./components/faq/TipsAndTricks";
import ContactUs from "./components/faq/ContactUs";

import Abbreviations from "./components/abbreviations/Abbreviations";



import Genmed from "./components/BUSpecificSection/Genmed";
import SpecialityCare from "./components/BUSpecificSection/SpecialityCare";
import BUSpecificSectionChc from "./components/BUSpecificSection/BuChc";
import Vaccine from "./components/BUSpecificSection/BuVaccine";







class App extends React.Component {
    base = "/help";

    state = {
        sideBar: [
            {
                name: "Flashcard Help",
                path: "",
                active: true,
                children: [
                    {
                        name: "Overview",
                        path: this.base + "/landing-page/overview",
                        component: Overview,
                        active: true
                    },
                    {
                        name: "Flashview: Key KPIs",
                        path: this.base + "/landing-page/flashview",
                        component: Flashview,
                        active: false
                    },
                    {
                        name: "Charts",
                        path: this.base + "/landing-page/charts",
                        component: Charts,
                        active: false
                    },
                    {
                        name: "Slicers Board",
                        path: this.base + "/landing-page/slicers-board",
                        component: SlicersBoard,
                        active: false
                    },
                    {
                        name: "Dimensions & Views",
                        path: this.base + "/landing-page/dimensions-views",
                        component: DimentionsViews,
                        active: false
                    },
                    {
                        name: "Bookmark Options",
                        path: this.base + "/landing-page/bookmark-options",
                        component: BookmarkOptions,
                        active: false
                    },
                    {
                        name: "Export Features",
                        path: this.base + "/landing-page/export-options",
                        component: ExportOptions,
                        active: false
                    },
                    {
                        name: "Flashcube: Slice & Dice Data",
                        path: this.base + "/landing-page/flashcube-slice-dice",
                        component: FlashcubeSliceDice,
                        active: false
                    }
                ]
            },
            {
                name: "Market Definition",
                path: "",
                active: false,
                children: [
                    {
                        name: "Diabetes",
                        path: this.base + "/landing-page/market-definition-dcv",
                        component: MarketDefinitionDcv,
                        active: false
                    },
                    {
                        name: "EP",
                        path: this.base + "/landing-page/market-definition-ep",
                        component: MarketDefinitionEp,
                        active: false
                    },
                    {
                        name: "Pasteur",
                        path: this.base + "/landing-page/market-definition-pasteur",
                        component: MarketDefinitionPast,
                        active: false
                    },
                    {
                        name: "Gz",
                        path: this.base + "/landing-page/market-definition-gz",
                        component: MarketDefinitionGz,
                        active: false
                    },
                    {
                        name: "CHC",
                        path: this.base + "/landing-page/market-definition-chc",
                        component: MarketDefinitionChc,
                        active: false
                    },
                    {
                        name: "Total Genmed",
                        path: this.base + "/landing-page/market-definition-total-genmed",
                        component: MarketDefinitionTgm,
                        active: false
                    },
                ]
            },
            {
                name: "Sinergi Data Stewards",
                path: "",
                active: false,
                children: [
                    {
                        name: "Data Stewards List",
                        path: this.base + "/landing-page/sinergi-data-stewards",
                        component: DataStewardsList,
                        active: false
                    }
                ]
            },
            {
                name: "Sinergi Data Panel",
                path: "",
                active: false,
                children: [
                    {
                        name: "Data Panel",
                        path: this.base + "/landing-page/sinergi-data-panel",
                        component: DataPanel,
                        active: false
                    },
                    {
                        name: "Price Detail",
                        path: this.base + "/landing-page/sinergi-price-detail",
                        component: PriceDetail,
                        active: false
                    }
                ]
            },
            {
                name: "Glossary",
                path: "",
                active: false,
                children: [
                    {
                        name: "Flashcard Dimensions",
                        path: this.base + "/landing-page/flashcard-dimensions",
                        component: FlashcardDimentions,
                        active: false
                    },

                    {
                        name: "Flashcard Metrics",
                        path: this.base + "/landing-page/flashcard-metrics",
                        component: FlashcardMetrics,
                        active: false
                    },
                    {
                        name: "Flashcube Dimensions",
                        path: this.base + "/landing-page/flashcube-dimensions",
                        component: FlashcubeDimentions,
                        active: false
                    },
                    {
                        name: "Flashcube Metrics",
                        path: this.base + "/landing-page/flashcube-metrics",
                        component: FlashcubeMetrics,
                        active: false
                    },
                    {
                        name: "Volume Calculations",
                        path: this.base + "/landing-page/volume-calculations",
                        component: VolumeCalculations,
                        active: false
                    }
                ]
            },
            {
                name: "FAQ",
                path: "",
                active: false,
                children: [
                    {
                        name: "Troubleshooting",
                        path: this.base + "/landing-page/troubleshooting",
                        component: Troubleshooting,
                        active: false
                    },
                    {
                        name: "Frequently Asked Questions",
                        path: this.base + "/landing-page/faqs",
                        component: Faqs,
                        active: false
                    },
                    {
                        name: "Tips and Tricks",
                        path: this.base + "/landing-page/tips-and-tricks",
                        component: TipsAndTricks,
                        active: false
                    },
                    {
                        name: "Contact Us",
                        path: this.base + "/landing-page/contact-us",
                        component: ContactUs,
                        active: false
                    }
                ]
            },
            {
                name: "Abbreviations",
                path: "",
                active: false,
                children: [
                    {
                        name: "Abbreviations",
                        path: this.base + "/landing-page/abbreviations",
                        component: Abbreviations,
                        active: false
                    }
                ]
            },
            {
                name: "BU Specific Section",
                path: "",
                active: true,
                children: [
                    {
                        name: "Genmed",
                        path: this.base + "/landing-page/Genmed",
                        component: Genmed,
                        active: true
                    },
                    {
                        name: "Speciality Care",
                        path: this.base + "/landing-page/Seciality-Care",
                        component: SpecialityCare,
                        active: false
                    },
                    {
                        name: "CHC",
                        path: this.base + "/landing-page/Bu-Chc",
                        component: BUSpecificSectionChc,
                        active: false
                    },
                    {
                        name: "Vaccine",
                        path: this.base + "/landing-page/Bu-Vaccine",
                        component: Vaccine,
                        active: false
                    }
                   
                   
                   
                ]
            }
        ]
    };

    componentDidMount() {
        // TODO - Get data from excel workbook
        // fetch('data.xlsx').then(function(res) {
        //  /* get the data as a Blob */
        //   if(!res.ok) throw new Error("fetch failed");
        //   return res.arrayBuffer();
        // }).then(function(ab) {
        //   /* parse the data when it is received */
        //   let data = new Uint8Array(ab);
        //   let workbook = XLSX.read(data, {type:"array"});
        //   /* DO SOMETHING WITH workbook HERE */
        //   sheet_to_json
        //   console.log(workbook)
        // });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route exact path='/help' render={() => <Home sideBar={this.state.sideBar} />} />
                    <Route path='/help/landing-page' render={() => <LandingPage sideBar={this.state.sideBar} />} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
