type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};




export const H1cellmembranedata = {
  questions: [
    {
      question: "What is the basic structural and functional unit of life?",
      answers: ["Tissue",
         "Organ",
         "Cell",
         "Organ System",
         "Organism"],
      correctAnswer: "Cell"
    },
    {
      question: "What part of the cell surrounds the nucleus?",
      answers: ["Plasma membrane",
         "Cytoplasm",
         "Endoplasmic reticulum",
         "Golgi apparatus",
         "Mitochondria"],
      correctAnswer: "Cytoplasm"
    },
    {
      question: "Which component defines the outer limit of the cell?",
      answers: ["Nucleus",
          "Endoplasmic reticulum",
         "Plasma membrane",
         "Cytoplasm",
         "Golgi apparatus"],
      correctAnswer: "Plasma membrane"
    },
    {
      question: "What is the main function of the plasma membrane?",
      answers: ["Protein synthesis",
         "Energy production",
         "Selective barrier for material passage",
         "Genetic material storage",
         "Waste degradation"],
      correctAnswer: "Selective barrier for material passage"
    },
    {
      question: "What are integrins?",
      answers: ["Enzymes",
         "Cytoplasmic filaments",
         "ECM components",
         "Proteins in the plasma membrane",
         "Lipids"],
      correctAnswer: "Proteins in the plasma membrane"
    },
    {
      question: "What does the cytoplasm consist largely of?",
      answers: ["DNA",
         "Cytosol",
         "Ribosomes",
         "Mitochondria",
         "Nucleus"],
      correctAnswer: "DNA"
    },
    {
      question: "What is the primary function of ribosomes?",
      answers: ["Lipid synthesis",
         "Protein synthesis",
         "DNA replication",
         "Carbohydrate metabolism",
         "Cell division"],
      correctAnswer: "Protein synthesis"
    },
    {
      question: "Which cells are specialized for movement?",
      answers: ["Epithelial cells",
         "Neurons",
         "Fibroblasts",
         "Muscle cells",
         "Adipocytes"],
      correctAnswer: "Muscle cells"
    },
    {
      question: "What is the main role of epithelial cells?",
      answers: ["Forming tight junctions between cells",
         "Secretion of hormones",
          "Generating action potentials",
         "Lipid storage",
         "Producing antibodies"],
      correctAnswer: "Forming tight junctions between cells"
    },
    {
      question: "Which cells are responsible for synthesizing and secreting components of the extracellular matrix?",
      answers: ["Neurons",
         "Epithelial cells",
         "Fibroblasts",
         "Adipocytes",
         "Muscle cells"],
      correctAnswer: "Fibroblasts"
    }
  ] as Question[]
}
  //   ,
  //   {
  //     "question": "What type of molecules do phospholipids in the membrane typically interact with?",
  //     "option1": "Hydrophobic fatty acids",
  //     "option2": "Hydrophilic fatty acids",
  //     "option3": "Carbohydrates",
  //     "option4": "Proteins",
  //     "option5": "Nucleic acids",
  //     "ans": 1
  //   },
  //   {
  //     "question": "What stabilizes the membrane structure by inserting among phospholipids?",
  //     "option1": "Proteins",
  //     "option2": "Carbohydrates",
  //     "option3": "Cholesterol",
  //     "option4": "RNA",
  //     "option5": "Glycolipids",
  //     "ans": 3
  //   },
  //   {
  //     "question": "What is the appearance of cell membranes after fixation in osmium tetroxide?",
  //     "option1": "Bilateral",
  //     "option2": "Multilaminar",
  //     "option3": "Trilaminar",
  //     "option4": "Monolaminar",
  //     "option5": "Pentalaminar",
  //     "ans": 3
  //   },
  //   {
  //     "question": "What are integral proteins?",
  //     "option1": "Proteins loosely associated with the membrane",
  //     "option2": "Proteins directly incorporated within the lipid bilayer",
  //     "option3": "Proteins only found in the cytoplasm",
  //     "option4": "Proteins involved in DNA replication",
  //     "option5": "Enzymes in the lysosome",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What characterizes multipass transmembrane proteins?",
  //     "option1": "Loosely bound to the membrane",
  //     "option2": "Associated with the outer membrane surface only",
  //     "option3": "Span the membrane several times",
  //     "option4": "Found only in the cytoplasm",
  //     "option5": "Responsible for DNA synthesis",
  //     "ans": 3
  //   },
  //   {
  //     "question": "What is the result of hydrophobic interactions in the membrane?",
  //     "option1": "Integration of carbohydrates",
  //     "option2": "Disruption of lipid layers",
  //     "option3": "Integration of proteins within the lipid bilayer",
  //     "option4": "Formation of ribosomes",
  //     "option5": "Formation of mitochondria",
  //     "ans": 3
  //   },
  //   {
  //     "question": "What are glycolipids?",
  //     "option1": "Proteins with carbohydrate moieties",
  //     "option2": "Lipids with carbohydrate chains",
  //     "option3": "Lipids without carbohydrate chains",
  //     "option4": "Proteins without carbohydrate moieties",
  //     "option5": "DNA-protein complexes",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What is the function of the glycocalyx?",
  //     "option1": "Protein synthesis",
  //     "option2": "Cell surface protection and interaction",
  //     "option3": "DNA replication",
  //     "option4": "Lipid storage",
  //     "option5": "Carbohydrate metabolism",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What percentage of the plasma membrane is composed of proteins by weight?",
  //     "option1": "10%",
  //     "option2": "30%",
  //     "option3": "50%",
  //     "option4": "70%",
  //     "option5": "90%",
  //     "ans": 3
  //   },
  //   {
  //     "question": "What do peripheral proteins do?",
  //     "option1": "Span the lipid bilayer",
  //     "option2": "Loosely associate with one membrane surface",
  //     "option3": "Integrate within the lipid bilayer",
  //     "option4": "Form the cell's genetic material",
  //     "option5": "Involve in cell division",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What is the primary component of cell membranes involved in cell signaling?",
  //     "option1": "Carbohydrates",
  //     "option2": "Cholesterol",
  //     "option3": "Lipids",
  //     "option4": "Proteins",
  //     "option5": "DNA",
  //     "ans": 4
  //   },
  //   {
  //     "question": "What is simple diffusion?",
  //     "option1": "Active transport of small, nonpolar molecules",
  //     "option2": "Passive movement of small, nonpolar molecules",
  //     "option3": "Transport requiring ATP",
  //     "option4": "Endocytosis of large particles",
  //     "option5": "Exocytosis of cellular waste",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What is facilitated diffusion?",
  //     "option1": "Active transport of ions",
  //     "option2": "Passive transport of ions and small molecules via transport proteins",
  //     "option3": "Transport requiring energy",
  //     "option4": "Transport of large particles by endocytosis",
  //     "option5": "Exocytosis of proteins",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What characterizes active transport?",
  //     "option1": "Passive movement of substances",
  //     "option2": "Movement of substances against their concentration gradient using energy",
  //     "option3": "Movement of water molecules by osmosis",
  //     "option4": "Facilitated diffusion of glucose",
  //     "option5": "Exocytosis of vesicles",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What is phagocytosis?",
  //     "option1": "Engulfing of liquid droplets",
  //     "option2": "Engulfing of solid particles",
  //     "option3": "Passive movement of ions",
  //     "option4": "Secretion of hormones",
  //     "option5": "Formation of tight junctions",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What is the primary function of mitochondria?",
  //     "option1": "Lipid synthesis",
  //     "option2": "ATP production",
  //     "option3": "Protein synthesis",
  //     "option4": "DNA replication",
  //     "option5": "Carbohydrate metabolism",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What is the role of the rough endoplasmic reticulum?",
  //     "option1": "Lipid synthesis",
  //     "option2": "Protein synthesis",
  //     "option3": "DNA replication",
  //     "option4": "ATP production",
  //     "option5": "Cell division",
  //     "ans": 2
  //   },
  //   {
  //     "question": "What organelle is responsible for modifying, sorting, and packaging proteins?",
  //     "option1": "Mitochondria",
  //     "option2": "Nucleus",
  //     "option3": "Golgi apparatus",
  //     "option4": "Lysosomes",
  //     "option5": "Peroxisomes",
  //     "ans": 3
  //   },
  //   {
  //     "question": "What is the function of lysosomes?",
  //     "option1": "ATP production",
  //     "option2": "Protein synthesis",
  //     "option3": "DNA replication",
  //     "option4": "Degradation of cellular waste",
  //     "option5": "Carbohydrate metabolism",
  //     "ans": 4
  //   },
  //   {
  //     "question": "What characterizes the nucleolus?",
  //     "option1": "Site of lipid synthesis",
  //     "option2": "Site of ribosome production",
  //     "option3": "Contains genetic material",
  //     "option4": "Produces ATP",
  //     "option5": "Involved in cell division",
  //     "ans": 2
  //   }
  // ]
  
  