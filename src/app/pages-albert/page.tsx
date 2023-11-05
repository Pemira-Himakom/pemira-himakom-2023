import React from "react";
import Hero from "@/components/vote/Hero";
import Timeline from "@/components/timeline/Timeline";
import CandidateContain from "@/components/candidate/CandidateContain";

export default function Pages () {
    return(
        <div>
            <Hero />
            <Timeline />
            <CandidateContain/>
        </div>
    );
}