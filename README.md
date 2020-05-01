# Ask John
A freestanding digital kiosk for Downtown Denton vistors.

## History
Back in 2014, we ran a small but effective project called Listen Denton that captured feedback from Denton citizens regarding issues they see in the city, and what they think a solution would be. This gave us great insight into an active citizen's perspective of how they see the city, but also an open format for brainstorming solutions.

We ended up aggregating these issues and solutions down into 6 projects, each being presented to city council with an associated technology solution. This was the first step into our path towards becoming a WhatWorksCity by Bloomberg Philanthropies.

## Now
With our work in open data and open source, our group is striving towards building an interactive kiosk hosted in downtown Denton that can serve not only as a source of information, but also as a public way of collecting feedback from citizens. We'll populate the interface with helpful points around town, tourist markers, and other items - in addition to a capability of collecting user feedback.

## Project Purpose and Objectives

### Purpose

- The project will provide objective input from a less biased sample of Denton residents
regarding their perceptions of and preferences for city government work.
- The project will expand and improve the public's awareness and opinion of TechMill
- The project will enable the city government to have a clearer picture of 
public opinion and will enhance the use of objective data in steering city policy


### Objectives
- The project will gather Denton residents' structured and unstructured 
  responses to a survey form
- The survey will take no more than four minutes to complete, on average
- The project will remain active long enough to collect 200 responses before
  re-evaluating the project's purpose and related objectives
- The project will provide a locally-sourced cognate to the city of Dallas kiosk
  upon which the project is at least partially based
- The project plans and code will be publicly available so the project will be 
reproducible in other locations with little additional work beyond the 
sourcing of parts and materials and the assembly of the project
- The city council and city staff will have a positive perception of the project
and will consider the data gathered to be valid and useful to their work

## Physical Design


### Environment

- Temperatures can reach 110F ambient, and will be higher inside an enclosure. The system SHALL be rated to operate normally at 130F
- Precipitation is obviously detrimental to electrical and electronic components. The system SHALL prevent precipitation from entering or affecting the electric and electronic components.
   - At a minimum, the cabinet construction shall use marine-grade or waterproofed plywood, primed and painted with exterior grade paint.
- Food or drink is potentially damaging to the cabinet and user interface components. The system SHALL use a waterproof keyboard and, if needed, a waterproof pointing device.
- All user interface components SHALL be waterproof and easily washed with soap and water.


### Security

- Insect or animal presence inside the enclosure is obviously undesirable. The system SHALL prevent entry by insects or animals
- Computing hardware is costly. The system SHALL withstand casual vandalism and SHALL have a variety of physical anchors enabling it to attach to nearby immovable objects
- The system SHOULD have no exposed attachment hardware that would allow disassembly and/or access to the inside of the enclosure with common hand tools
- The system SHALL have a lockable panel to prevent unauthorized access to the internal electronic components that may normally need access by TechMill-authorized individuals
- Metal corner guards further protect seams and improve physical security. The cabinet MAY use metal sheathing at seams to improve physical integrity of the cabinet.
- The cabinet SHALL NOT use casters or wheels to improve mobility
- The cabinet SHALL sit flush with the ground on a level surface
- The cabinet SHOULD contain an Automatic Packet Reporting System (APRS) module with GPS and 144.39MHz radio, with 24 hour battery backup.


### Safety
- The cabinet center of gravity SHALL sit within 2 feet / 61cm of the bottom to avoid tipping hazards unless the cabinet will be secured to the surface below or the the rear of it.
- The electrical power circuits SHALL have circuit breakers or resettable fuses
- The cabinet SHALL NOT have external/exposed power receptacles, plugs, or switches
- Mains power circuits SHALL conform to the National Electrical Code (NEC)
- The cabinet SHALL NOT have protrusions beyond 1/2 inch / 1cm of the cabinet side surfaces
- The cabinet edges SHALL have corner guards, corner pads, or rounded edges for sharp edges below a height of 2m


### Power
- This project MAY use 120V AC mains voltage as a power source
- This project MAY use 12V DC as a power source
- This project MAY use external solar cells on the top to supply regulated 12V or 5V DC power
- This project MAY use external solar cells rated to 200%-300% of the expected solar charge input each day, to allow for nighttime operation or operating in partial shade
- If the project is expected to run entirely off of solar power, the project SHOULD be sited in direct sun for most of the day, with the roof of the cabinet built at an angle designed to gather the most sunlight during winter sun angles (In Denton, TX, a reasonable compromise is 45 degrees from horizontal)


#### Off-grid operation
- If the project implements off-grid operation:
   - The project SHOULD include provisions for a 12V battery system, voltage regulation, and battery health and charge status indicators
   - The display SHALL be rated for 5V or 12V DC power input
   - The computer SHOULD use a low-power single board computer, such as a Raspberry Pi 3 or similar

### Networking

- As data integrity is the most important aspect of this project, the project SHALL use a wireless network interface to transmit completed forms to a cloud storage location immediately upon completion of a form
- The system software SHALL send heartbeat information each minute to a networked location that can report and alert administrators if the system fails or becomes unstable.

### User Interface
- Direct sunlight interferes with user's ability to use the system and unnecessarily adds heat to the system. Direct sunlight on the interface and especially the screen SHOULD be avoided. The best means to achieve this goal is to place a solar panel in line with the interface (i.e. rearward-facing), such that the optimal sun angle will place the user facing the sun, with the cabinet providing some shade from the sun and shielding the components from direct sunlight.


#### ADA compliance
- The user interface SHOULD allow for voice prompts and voice recording of responses for individuals with vision impairments or mobility impairments that preclude the effective use of the display, keyboard, and pointing device



### Appearance

- The cabinet SHOULD be attractive to the eye both in its physical design and its external surface design/decoration/paint
- The cabinet SHOULD be easily identified as a kiosk for submitting ideas or complaints that will be collected and delivered to the City of Denton
- The cabinet SHOULD display the logos of all contributing organizations on each face visible to passers-by

### Construction
- The cabinet MAY use a mix of plywood, structural lumber, metal studs, welded or bolted metal supports, and sheet metal.
- The cabinet MAY resemble a coin-operated arcade video game
