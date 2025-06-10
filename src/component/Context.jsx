import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextValue = createContext()

const ContextContainer = ({ children }) => {
    const [lyrics, setLyrics] = useState([
        {
            id: 14567765,
            title: "LALALA",
            description: `
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                `
        },
        {
            id: 28765432,
            title: "wfaersfyu",
            description: `
                Lorem ipsu adipisicing elit. Tempora quasi sed minus optio. Vitae voluptatibus cumque nisi sit cupiditate! Iusto modi minima quae laboriosam commodi laudantium ex nisi accusamus error?
                `
        },

        {
            id: 9875434,
            title: "dhrghrhrrrrhrhrhrhrdgsfsfssgdgfngdsrhrdhrhrssgsegeskjvhlhesgesbeshbehjisebresbdshodxmiokbviodvboi",
            description: `
            ekjvbipsvnsdopvndoi dxio jdsvoeijvdspovjpsjvpesobeaspoparibipajprjspiovjaspovjdsopvdvdosvjsipovjsopvjdsokvjpzdsokzdkvozdvo;zdkvpzkveokfo ovkdvod jofjwoafliaesjaeeajoladj ondiofjesopfje fjaesok esvi;oejgodsmspojbgsjkgl nz;v/dsklng es/lgnesklgnjespojrsgoesjpoerjoesivjs;oxdlbodrjbiodjslosjglovjrsobjsosjrovgpjspovjspobvdsopbjofspkjbpodfsbdfspobjfsbpodfsjbpodsjbpodsjbopjvoepsavjopdsbvjspobksjpobsdkopbvdskjbpodskjbposkbpoejgeapojfiebpdfgkorkjdphjrdoiodrhr;dlhfs;sf;lsh;ltxhkfx;lsjhtrojtd;osd;bsj;tdshtdohdtlijo;jopzdvdevea
ev
evas
v
avas
savelvivjodsiudifxgopibvzfjbzfpojzdopjzdpozojvdljd;voadsj;ozdjv;odjvo;zdjv;oadsk;zdjbpoadsjbadp9japbveapoj posjvpowefjeopaf jewpofjewpofjweppesovnewopvjoespjvesopvjespovjoewpfjespovjewpovjerpogjreogj'srgpoj ewapfoewjfopewjfepsockmo wepokf ewop fewofjopgjewjopgjewpovejpojfpwofjepowjffopjewvco pjspocjsdopfpdmf peo fjweokeopkceoj ewpojfepowk wkf ewpkfewofkwepofkewpoewopewkfopefkjepokdsopcvkdspovksdpofewksjfposekjpeofksepokdpovkdovsddsoksdpokvdokeopfkepokjepowfjeofjkwq0pjef9ewpya0uew89gypea98ewiporgreg;h0ewubjrdsioguer;gudubgrdgiporuroe;grahioibrejhrei;jbreiofjdob;rjrio
            `
        }

    ])

    useEffect(() => {
        axios.get("https://song-writer-app-server.onrender.com/lyrics")
            .then(response => {
                setLyrics(response.data);
            })
            .catch(error => {
                console.error("Error fetching lyrics:", error);
            });
    }, [])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const addNewSong = () => {

        if (!title.trim() || !description.trim()) return;

        axios.post("https://song-writer-app-server.onrender.com/lyrics", { title: title, description: description })
            .then(response => {
                console.log("New song added:", response.data);
            })
            .catch(error => {
                console.error("Error adding new song:", error);
            });

        const newLyric = {
            id: Date.now(),
            title: title,
            description: description
        }

        setLyrics(prev => [...prev, newLyric])
        setTitle("")
        setDescription("")
    }

    const deleteSong = (id) => {
        axios.delete(`https://song-writer-app-server.onrender.com/lyrics/${id}`)
            .then(response => {
                console.log("Song deleted:", response.data);
                setLyrics(prev => prev.filter(lyric => lyric.id !== id));
            })
            .catch(error => {
                console.error("Error deleting song:", error);
            });
    }


    return (
        <ContextValue.Provider value={{
            lyrics,
            setLyrics,
            addNewSong,
            title,
            description,
            setTitle,
            setDescription,
            deleteSong
        }}>
            {children}
        </ContextValue.Provider>
    )
}

export default ContextContainer