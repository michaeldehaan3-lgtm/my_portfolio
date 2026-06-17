export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface ProjectImageGroup {
  title: string;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  title: string;
  caption?: string;
  description: string | string[];
  coverImage?: string;
  metadata?: {
    year?: string;
    location?: string;
    role?: string;
    tools?: string;
    collaborators?: string;
  };
  images: ProjectImage[];
  imageGroups?: ProjectImageGroup[];
  youtubeUrl?: string;
  youtubeAutoplay?: boolean;
}

function projectSortKey(project: Project): number {
  const year = project.metadata?.year?.trim() ?? "";
  const matches = year.match(/\d{4}/g);
  const maxYear = matches?.length
    ? Math.max(...matches.map((y) => parseInt(y, 10)))
    : 0;

  if (/ongoing/i.test(year)) {
    return 1_000_000 + maxYear;
  }

  return maxYear;
}

function sortProjectsByYear(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => projectSortKey(b) - projectSortKey(a));
}

export const siteName = "Michael de Haan";

export const architecture = sortProjectsByYear([
  {
    slug: "ponderosa",
    title: "Ponderosa",
    caption: "Ponderosa",
    description: [
      "Ponderosa Cabin is a residential project developed through an independent design practice and located on Echo Lake near Bigfork, Montana. The project emerged after the original camp structure was destroyed during a summer wind storm when a ponderosa pine fell onto the building. The new cabin takes its name from this event, grounding the project in the site's history.",
      "Designed as a durable retreat for everyday living and large family gatherings, the cabin balances contemporary needs with the character of the site's past as a former Bible camp. Interior spaces are organized around clarity, warmth, and thoughtful sequencing, creating a place for communal life that reflects both memory and ongoing use.",
    ],
    coverImage: "/design/ponderosa/cover.jpg",
    metadata: {
      year: "2024–Ongoing",
      location: "Echo Lake, Montana",
    },
    images: [
      { src: "/design/ponderosa/images/1.jpg" },
      { src: "/design/ponderosa/images/2.jpg" },
    ],
  },
  {
    slug: "sonic-storage",
    title: "Sonic Storage",
    caption: "Sonic Storage",
    description:
      "A plywood shelf designed and built to accommodate a growing record collection.",
    coverImage: "/design/sonicstorage/cover.jpg",
    metadata: {
      year: "2025",
      location: "Calgary, Canada",
    },
    images: [
      { src: "/design/sonicstorage/images/01.jpg" },
      { src: "/design/sonicstorage/images/02.jpg" },
      { src: "/design/sonicstorage/images/03.jpg" },
    ],
  },
  {
    slug: "resonant-ground",
    title: "Resonant Ground",
    caption: "Resonant Ground",
    description: [
      "Calgary's urban fabric is currently disjointed and failing to meet the needs of its communities, with the project site exemplifying these challenges. Surrounded by ineffective structures that lack cohesion and vitality, the neighborhood suffers from fragmented public spaces, underutilized areas, and a lack of meaningful connections between buildings and their surroundings. Architecture has the unique potential to repair these fractures and breathe new life into failing urban landscapes by creating spaces that foster interaction, inclusivity, and vitality. This project leverages that potential through a multi-use, multi-residential design that integrates residential, commercial, and cultural functions, establishing a vibrant and inclusive hub for the neighborhood and the city at large.",
      "Inspired by Morandi's strategies for creating monumentality, the design employs bold forms and a commanding presence to assert itself as a central anchor within the urban fabric. Morandi's approach to crafting structures that command attention while remaining contextually grounded has guided our strategy, using monumentality as a means to reconnect fractured spaces and inspire renewed activity. This project demonstrates how architecture can act as a catalyst for urban revitalization, transforming fragmented and ineffective areas into cohesive and thriving environments that reflect and strengthen Calgary's identity.",
    ],
    coverImage: "/design/resonantground/cover.jpg",
    metadata: {
      year: "2025",
      location: "Calgary, Canada",
    },
    images: [
      { src: "/design/resonantground/images/01.jpg" },
      { src: "/design/resonantground/images/02.jpg" },
      { src: "/design/resonantground/images/03.jpg" },
      { src: "/design/resonantground/images/04.jpg" },
    ],
  },
  {
    slug: "braeside",
    title: "Braeside: Hillside",
    caption: "Braeside: Hillside",
    description: "Description forthcoming.",
    coverImage: "/design/braesidehill/cover.jpg",
    metadata: {
      year: "",
      location: "Calgary, Alberta",
    },
    images: [
      { src: "/design/braeside/images/01.jpg" },
    ],
  },
  {
    slug: "braeside-icon",
    title: "Braeside: Icon",
    caption: "Braeside: Icon",
    description: "Description forthcoming.",
    coverImage: "/design/braesideicon/cover.jpg",
    metadata: {
      year: "",
      location: "Calgary, Alberta",
    },
    images: [
      { src: "/design/braesideicon/images/01.jpg" },
    ],
  },
  {
    slug: "role-models",
    title: "Role Models",
    caption: "Role Models",
    description:
      "Modeled in Rhino through a subtractive design process, this project explores the relationship between void and form. The resulting geometry was recursively projected back onto itself to investigate the mapping of materiality through digital operations and representational techniques. These explorations culminated in the fabrication of a physical model constructed from paper and other sheet materials, which were laser cut, scored, folded, and assembled into a three-dimensional form. The project examines the translation of complex digital geometries into tangible architectural artifacts through processes of projection, accumulation, and fabrication.",
    coverImage: "/design/rolemodels/cover.jpg",
    metadata: {
      year: "2023",
      location: "Calgary",
    },
    images: [
      { src: "/design/rolemodels/images/design.jpg" },
      { src: "/design/rolemodels/images/01.jpg" },
      { src: "/design/rolemodels/images/02.jpg" },
      { src: "/design/rolemodels/images/03.jpg" },
      { src: "/design/rolemodels/images/04.jpg" },
      { src: "/design/rolemodels/images/05.jpg" },
    ],
  },
  {
    slug: "drawing-estrangement",
    title: "Drawing Estrangement",
    caption: "Drawing Estrangement",
    description: [
      "This project explores estrangement as a method of architectural inquiry through the analysis and translation of cinematic space. Drawing from a selected sequence in World on a Wire (1973), a two-part television miniseries directed by Rainer Werner Fassbinder, the work investigates how film constructs spatial continuity from spaces whose physical relationships remain uncertain or unknowable. While viewers initially experience these environments as coherent and continuous, closer examination reveals them to be carefully assembled through framing, editing, reflection, movement, and perspective.",
      "Using the film sequence as a point of departure, a series of spaces were reconstructed as a three-dimensional digital model based on their perceived relationships within the film. The project then translated this model into a set of two-dimensional drawings that sought to preserve and amplify the ambiguity present in the original sequence. Through linework, hierarchy, projection, and representation, the drawings explored moments where orientation, depth, and spatial relationships become uncertain.",
      "The final stage extended these investigations through animation. Rather than simply representing the reconstructed model, animation was used to further develop the sense of estrangement found within the film, exploring how movement and shifting perspectives can destabilize spatial understanding. Moving from film to model, drawing, and animation, the project examines how architectural representation can be used not only to describe space but also to question how space is perceived, constructed, and understood.",
    ],
    coverImage: "/design/drawingestrangement/cover.jpg",
    metadata: {
      year: "2026",
      location: "Calgary",
    },
    youtubeUrl: "https://www.youtube.com/watch?v=tQQTKVrxvjE",
    youtubeAutoplay: true,
    images: [
      { src: "/design/drawingestrangement/images/01.jpg" },
      { src: "/design/drawingestrangement/images/02.gif" },
      { src: "/design/drawingestrangement/images/03.jpg" },
      { src: "/design/drawingestrangement/images/04.gif" },
      { src: "/design/drawingestrangement/images/05.jpg" },
      { src: "/design/drawingestrangement/images/06.gif" },
      { src: "/design/drawingestrangement/images/07.jpg" },
      { src: "/design/drawingestrangement/images/08.gif" },
      { src: "/design/drawingestrangement/images/09.jpg" },
      { src: "/design/drawingestrangement/images/10.gif" },
      { src: "/design/drawingestrangement/images/11.jpg" },
      { src: "/design/drawingestrangement/images/12.gif" },
    ],
  },
  {
    slug: "steel-and-cable",
    title: "Steel and Cable",
    caption: "Steel and Cable",
    description:
      "Three steel structures built from rod, cable, eyelets, and welded connections. The project resulted in a tower, a bridge, and a cantilever, each developed around a distinct structural system. Designed and fabricated as physical models, the work explores how structure can be expressed through material, connection, and form.",
    coverImage: "/design/steelandcable/cover.jpeg",
    metadata: {
      year: "2024",
      location: "Calgary",
      collaborators: "Bryce Meintzer, Ethan Scrase, and Nolan Miranda",
    },
    images: [],
    imageGroups: [
      {
        title: "Tower",
        images: [
          { src: "/design/steelandcable/images/01.jpeg" },
          { src: "/design/steelandcable/images/02.jpeg" },
          { src: "/design/steelandcable/images/03.jpeg" },
          { src: "/design/steelandcable/images/04.jpeg" },
        ],
      },
      {
        title: "Bridge",
        images: [
          { src: "/design/steelandcable/images/05.jpeg" },
          { src: "/design/steelandcable/images/06.jpeg" },
          { src: "/design/steelandcable/images/07.jpeg" },
          { src: "/design/steelandcable/images/08.jpeg" },
        ],
      },
      {
        title: "Cantilever",
        images: [
          { src: "/design/steelandcable/images/09.jpeg" },
          { src: "/design/steelandcable/images/10.jpeg" },
          { src: "/design/steelandcable/images/11.jpeg" },
          { src: "/design/steelandcable/images/12.jpeg" },
        ],
      },
    ],
  },
  {
    slug: "oberon",
    title: "Oberon",
    caption: "Oberon",
    description: [
      "OBERON PLUGIN USER MANUAL",
      "Introduction: Context + Scenario",
      "In the mid‑23rd century, Earth's environmental and geopolitical conditions reached a breaking point. Centuries of resource depletion, erratic climate patterns, and regional instability transformed long‑habitable zones into unpredictable terrains. Coastal cities migrated inland; inland cities collapsed outward. Entire nations adopted rotational habitation cycles, moving populations seasonally between safe zones. Humanity remained technologically advanced but ecologically transient.By 2248, the United Nations Adaptive Settlement Initiative (UN‑ASI) commissioned a fleet of Extraplanetary Settlement Vessels enormous, semi‑autonomous ships capable of landing on nearby moons and terrestrial‑class planets for temporary occupation. These missions were not colonization projects. They were acts of planetary sampling, resource rotation, and short‑term sanctuary, allowing human groups to survive without permanently scarring or exploiting their host worlds.These settlement vessels were required to: identify safe landing locations on unknown terrain, deploy inflatable, airlocked habitation pods from their hulls, create semi‑rigid structural frames from onboard scaffolding, adapt to local topography with minimal ground disturbance, and retract and depart fully intact when conditions required relocation.Oberon was developed as the internal architectural logic system enabling these ships to evaluate terrain, orient themselves, subdivide their hulls, deploy pods, form scaffolding, and inflate temporary settlements all without permanent planetary impact.This manual explains every part of that system. No step is trivial. Each component in Oberon exists because it ensures survival, adaptability, and non‑destructive settlement on worlds that were never designed for us.",
      "2. Preparation Requirements",
      "Before Oberon can construct a functioning settlement deployment logic, several geometric and conceptual prerequisites must be completed. These ensure that all subsequent operations occur with precision and contextual awareness.",
      "2.1 Planetary Terrain (Topography)",
      "A settlement vessel cannot deploy without understanding where it is landing. The terrain provided to Oberon either as a mesh or surface is the fundamental dataset controlling every subsequent decision.",
      "Why terrain matters:The vessel cannot land on steep, uneven, or jagged surfaces. Pod deployment requires predictable, stable orientation. Scaffolding and inflated pods must react to true topographical constraints.",
      "Important guidelines:High‑resolution meshes may be used but could burden computation. Simplifying excessively complex meshes ensures faster, clearer landing analysis. The topography defines the context of survival Oberon assumes nothing beyond what you give it.",
      "2.2 Vessel Geometry (In-Flight + Landed Versions)",
      "Because settlement vessels transform between flight and ground states, Oberon requires accurate representations of both.",
      "In‑Flight Vessel/Landing gear retracted. Clean geometry for alignment. Represents the orientation before atmospheric descent or orbital insertion.",
      "Landed Vessel/Landing gear deployed. Resting configuration on planet. Defines the moment the ship becomes a temporary architectural anchor.",
      "Why two versions?/Because in Oberon's logic: Landing location analysis happens before the vessel touches down. Pod deployment happens after the hull is grounded and stable.Thus the system must understand both states.",
      "The Simplified Hull/Both versions must contain a central hull object a minimal, clean geometry intended for subdivision. This is the \"spine\" from which pods deploy.It must be simple because: UV subdivision requires logical parameterization. Complex, greebled geometry produces unpredictable patching. Pod deployment needs clean normals and consistent surface logic.",
      "2.3 Bounding Box",
      "The bounding box acts as a spatial and orientation reference for the vessel.",
      "Why it matters:/Ensures predictable vessel alignment to terrain planes. Assists in landing transformations, avoiding skewed or drifting placement. Helps determine collision-free descent orientation.Oberon uses the bounding box as the vessel's \"outer shell of certainty.\"",
      "3. Component-by-Component Logic Explanation",
      "Every Oberon component embodies part of a single chain of survival logic. Below is a deep, fully detailed explanation of each.",
      "3.1 Landing Location Finder",
      "Before any settlement deployment occurs, the vessel must determine where it should land not just where it can. This component analyzes the terrain to identify the safest and most viable landing zones.",
      "Topography/The planetary surface dataset. Represents the environmental unknown that the ship must interpret. All future architectural logic depends on this interpretation.",
      "Search Density/Controls the number of sample points used during analysis. High density = meticulous caution (safer but slower). Low density = faster reconnaissance but may overlook micro‑hazards. Essential for risk‑adjusted landings on unpredictable worlds.",
      "Radius/Defines the minimum stable surface footprint the vessel requires. Reflects the scale and weight distribution of the ship. Ensures that a \"flat point\" is not just a flat pixel but a flat region.",
      "Count/Requests multiple viable landing zones. Useful because on alien terrain, one good zone may not be enough. Allows redundancy, simulation runs, or multi‑vessel coordination.",
      "Zones/World‑space coordinates of optimal landing spots. These are not arbitrary; they are computed safe zones.",
      "Flatness/A four‑value diagnostic describing terrain suitability. May represent slope deviation, angular variance, and micro‑topographical distortion. Allows designers to compare landings quantitatively.",
      "Planes/Coordinate frames aligned to each landing zone. Necessary for aligning the ship in a physically meaningful orientation. Without these planes, the vessel would have no rotational logic when touching down.",
      "3.2 Vessel Landing Component",
      "Once viable landing zones are identified, the vessel must align and descend onto one. This component positions the vessel precisely.",
      "Vessel/The full vessel geometry in its in‑flight orientation. Contains the simplified hull needed later.",
      "Bounding Box/Ensures that the vessel's descent respects its true footprint. Avoids misalignment caused by uneven geometry.",
      "Planes/The landing frames from the previous component. These are the \"targets\" or \"hooks\" for the landing.",
      "Selection/Lets the user choose which landing zone to descend onto. Vital for multi‑zone missions, convoy landings, or multi‑scenario evaluations.",
      "Surface Offset/Provides visual clearance. Prevents interpenetration with noisy terrain meshes. Represents the real-world fact that vessels hover or cushion before full weight transfer.",
      "Output/Landed Vessel/The vessel in its final, ground‑truth orientation. This marks the moment where architecture begins.",
      "3.3 Hull Extraction (Grasshopper Side Step)",
      "Now that the vessel is grounded, Oberon needs the actual hull surface that will be used for pod deployment.",
      "Why extraction is needed:/The in-flight hull may not match the landed orientation. The landed vessel may contain additional geometry not suitable for subdivision. Oberon must work with the \"true\" architectural surface in its final context.",
      "Extraction Logic:/If one hull exists → direct connection. If multiple hulls exist → isolate via List Item → merge.This ensures that pod logic acts upon the correct, stable, planetary-aware geometry.",
      "3.4 Vessel Subdivision Component",
      "This is where the vessel begins behaving like architecture.",
      "Landed Geometry/The simplified hull extracted from the grounded vessel. The surface that literally becomes the settlement wall.",
      "U-Division & V-Division/Define the patch grid. Higher resolution = more deployment options. Lower resolution = coarser, more monumental pods.",
      "Why subdivision exists:Settlement pods must emerge from predictable, standard-sized modules. UV patches provide a consistent catalog of possible expansion nodes. Ensures geometric regularity essential for fabrication and inflation.",
      "Subdivided Surfaces/Each surface is a potential habitation node. Represents a conceptual \"cell\" in the vessel's architectural anatomy.",
      "Centroids/Spatial anchors for pod generation. Provide positional logic for randomness, extrusion, and orientation.",
      "Normals/Define outward direction critical for pod deployment. Prevent pods from being sent into the hull interior.",
      "Parent Face Index/Tracks which hull face generated which patch. Useful for filtering deployment by region or orientation.",
      "3.5 Pod Deployment Component",
      "Here the vessel begins expanding into settlement form.",
      "Subdivided Surfaces + Centroids/Foundation of pod placement logic. Must be flattened to unify patch indexing.",
      "Percentage/Controls how much of the hull becomes living or working space. Reflects real mission constraints not all hull regions are serviceable.",
      "Seed/Randomizes which patches become pods. Creates varied settlement layouts. Prevents predictable or vulnerable patterns.",
      "Extrusion/Determines pod depth. Represents required interior volume or pressure envelope.",
      "Extruded Pods/The first physical form of the settlement. Geometric representations of deployable, modular spaces.",
      "3.6 Pod Scaffolding / Edge Component",
      "Pods alone cannot survive alien conditions. They require structural support.",
      "Why scaffolding exists:/Inflatable pods must be externally braced. Scaffolding maintains shape, protects against pressure variances, and locks pods into airlocked frames.",
      "Pods/The raw shells of the settlement.",
      "Vessel Hull/Ensures scaffolding terminates cleanly at the hull boundary.",
      "Toggle/Enables or disables frame generation.",
      "Radius/Controls structural member thickness.",
      "Output/Piped Scaffolding. A complete exoskeletal frame supporting pod integrity.",
      "3.7 Pod Inflation Component (WIP)",
      "In future iterations, pods will inflate into fully autonomous structures.",
      "Planned Logic:Vessel + scaffolding create a volumetric boundary. Inflatable pods expand until confined by these boundaries. Internal pressure parameter allows simulation-based deployment.",
      "Planned Output:Realistic, pressure-adjusted inflated pod volumes.",
      "4. System Limitations",
      "While Oberon provides a powerful logic framework for extraplanetary settlement, several conceptual and computational constraints remain:",
      "4.1 Parametric Dependence/Oberon assumes consistent UV logic and clean topology. Highly irregular or greebled vessels may produce unpredictable subdivisions.",
      "4.2 Mesh Dependency for Terrain/Noisy or overly dense terrain meshes can lead to false negatives in flatness analysis.",
      "4.3 Idealized Physics/The current system assumes perfect extrusion, rigid scaffolding, and pressure-confined inflation without simulating: atmospheric variance, microgravity behavior, tectonic vibration, or thermal expansion.",
      "4.4 Scaffolding Limitations/Scaffolding generation does not yet evaluate structural load paths or buckling scenarios.",
      "4.5 Future Features Dependent on Pod Inflation System/The inflation system remains incomplete, limiting simulation accuracy for: airtight envelope behavior pressure differentials thermal membrane deformation. These limitations will be reduced in future versions.",
      "END OF MANUAL",
    ],
    coverImage: "/design/oberon/cover.png",
    metadata: {
      year: "2025",
      location: "",
    },
    images: [
      { src: "/design/oberon/images/01.jpg" },
      { src: "/design/oberon/images/02.jpg" },
      { src: "/design/oberon/images/03.jpg" },
      { src: "/design/oberon/images/04.jpg" },
      { src: "/design/oberon/images/05.png" },
      { src: "/design/oberon/images/06.png" },
      { src: "/design/oberon/images/07.jpg" },
      { src: "/design/oberon/images/08.png" },
      { src: "/design/oberon/images/09.png" },
      { src: "/design/oberon/images/10.png" },
      { src: "/design/oberon/images/11.png" },
    ],
  },
]);

export const photography = sortProjectsByYear([
  {
    slug: "buffalo-bull-sheet",
    title: "Buffalo Bull Sheet",
    caption: "Buffalo Bull Sheet",
    description:
      "An ongoing photographic series documenting the cabin community at Buffalo Lake, Alberta. The work explores domestic accumulation, material improvisation, and the quiet rituals of seasonal inhabitation.",
    coverImage: "/photography/buffalo-bull-sheet/cover.jpg",
    metadata: {
      year: "2019–Ongoing",
      location: "Alberta, Canada",
      role: "Photographer",
    },
    images: [
      { src: "/photography/buffalo-bull-sheet/images/1.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/2.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/3.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/4.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/5.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/6.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/7.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/8.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/9.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/10.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/11.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/12.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/13.jpg" },
      { src: "/photography/buffalo-bull-sheet/images/14.jpg" },
    ],
  },
  {
    slug: "boy",
    title: "Boy",
    caption: "Boy",
    description: "Description forthcoming.",
    coverImage: "/photography/boy/cover.jpg",
    metadata: {
      year: "2025",
      location: "",
      role: "Photographer",
    },
    images: [
      { src: "/photography/boy/images/01.jpg" },
      { src: "/photography/boy/images/02.jpg" },
      { src: "/photography/boy/images/03.jpg" },
      { src: "/photography/boy/images/04.jpg" },
      { src: "/photography/boy/images/05.jpg" },
      { src: "/photography/boy/images/06.jpg" },
    ],
  },
]);

export const info = {
  portrait: "/headshot/headshot.jpeg",
  photoCredit: "",
  intro: [
    "My work in architecture and design is grounded in observation and careful construction. I am interested in how spatial, material, and structural decisions shape experience without overdetermining how space is used.",
    "I approach each project as a framework rather than a fixed object, allowing room for adaptation, reinterpretation, and change over time. Clarity, restraint, and the definition of constraints are central to how I define and develop work.",
    "Michael de Haan holds a BFA in Visual Studies and a Master of Architecture from the University of Calgary. The studio is based in Calgary.",
    "The focus of the studio is on pushing the boundaries of design. We reject predictability and off-the-shelf solutions, instead pursuing creative, comprehensive, and rigorous responses to projects at every scale. Each opportunity is approached as a chance to create meaningful work that is thoughtful, considered, and carefully executed.",
  ],
  email: "info@michaeldehaan.ca",
  location: "Calgary, Canada",
};
