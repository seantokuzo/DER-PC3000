const sounds = [
    {
        type: 'claps',
        samples: [
            { name: 'soft clap', src: "https://docs.google.com/uc?export=download&id=19VPECx83SCKkztp7_A3T7nqEhGgjWlGl" },
            { name: 'tape clap', src: "https://docs.google.com/uc?export=download&id=13JUZRRy5500ZTBOb34kHMgfUvvfPK32c" },
            { name: 'trap clap', src: "https://docs.google.com/uc?export=download&id=1d1lsnmPb85SWkcievHbCfiTsFtcxvMdb" }
        ]
    },
    {
        type: 'fun',
        samples: [
            { name: 'deadly narcotic', src: "https://docs.google.com/uc?export=download&id=1wEBUKeEjfYGB8xtIi--jlkI6cz25dy9a"},
            { name: 'look at his face', src: "https://docs.google.com/uc?export=download&id=1BbIKrLk7fr_ugfBpjoVxsD3CzDdU1jQg"},
            { name: 'okay', src: "https://docs.google.com/uc?export=download&id=1v6Z2bzKhkwX6-ilIshwZ0gm3WHJ8Bx3C"},
            { name: 'what did it say', src: "https://docs.google.com/uc?export=download&id=1q0Jp-Ge25nzgVOG35EbkGEIfI9GcwfMG"},
            { name: 'where gun', src: "https://docs.google.com/uc?export=download&id=1pCrwDhUyqNl6UsswTSCPKzfDiaTghv7x"}
        ]
    },
    {
        type: 'hats',
        samples: [
            { name: 'hard hh', src: "https://docs.google.com/uc?export=download&id=1dVHwgrm88l8-0o35tUhEh8rqmUafHsyV"},
            { name: 'live hh', src: "https://docs.google.com/uc?export=download&id=18pnveOflLa-Dhddw-oTNdHNaEzTM7soX"},
            { name: 'lofi hh', src: "https://docs.google.com/uc?export=download&id=1bN2ROfDngGofClG0fBySGg1nKFo3R3Sc"},
            { name: 'low hh', src: "https://docs.google.com/uc?export=download&id=1Snj6PeT5v5qlPunsp1ORizOYLOZEs7JD"},
            { name: 'lowkey hh loop', src: "https://docs.google.com/uc?export=download&id=1_Q9eqlBUUkqeiigLk2QgiR4D-pxUxZLo"},
            { name: 'upbeat hh loop', src: "https://docs.google.com/uc?export=download&id=1Deey1OJVaA8Moe8mG3AbASMO91u4iLpC"}
        ]
    },
    {
        type: 'kicks',
        samples: [
            { name: 'live kick', src: "https://docs.google.com/uc?export=download&id=1vnBM0AMmuTiPwPJsl4iuGyAeQNvlkAqc"},
            { name: 'lofi kick', src: "https://docs.google.com/uc?export=download&id=1YY_baXecbuKqvuFDWfxwFmgKSNUt0zB8"},
            { name: 'sub kick', src: "https://docs.google.com/uc?export=download&id=1Ww5-8yxVonE5KlUl10mET5pCfUOorhhn"}
        ]
    },
    {
        type: 'percs',
        samples: [
            { name: 'camera perc', src: "https://docs.google.com/uc?export=download&id=11mJgXPzWoIeofgBYVD2LpTOod8fPjORU"},
            { name: 'hand drum perc', src: "https://docs.google.com/uc?export=download&id=1aTZXxtLqS2cf69EH_EChbUYGaFDNHRqt"}
        ]
    },
    {
        type: 'snares',
        samples: [
            { name: '80s snare', src: "https://docs.google.com/uc?export=download&id=1E9aRBQvRIBt1fvBJnlUONOdIhl5t62P1"},
            { name: 'reverb snare', src: "https://docs.google.com/uc?export=download&id=1LaJ_cuqPRBBCSb__lambObh0oa6a7YXw"},
            { name: 'rim snare', src: "https://docs.google.com/uc?export=download&id=10FDLyAvaEHzrrQ94STUjnvr8fM_1XD-3"},
            { name: 'stick snare', src: "https://docs.google.com/uc?export=download&id=1jD6NztdxCgO-2eA4ZsxIQauqcIaxAp39"},
            { name: 'tight snare', src: "https://docs.google.com/uc?export=download&id=1hbA11fMocCfyNCp8kK8po-oCQdfRjLVq"}
        ]
    },
    {
        type: 'toms',
        samples: [
            { name: 'floor tom', src: "https://docs.google.com/uc?export=download&id=1-fVmzv63qaGGhrlEy9XFA-Ov0XxnazPP"},
            { name: 'rack tom', src: "https://docs.google.com/uc?export=download&id=15B2vwjkOnTNGGu9IFIrFavV13nGK3nQ1"}
        ]
    },
    {
        type: 'tracks',
        samples: [
            { name: 'dreamy guitar', src: "https://docs.google.com/uc?export=download&id=1sXiMwSk7oOXF_7IjPbVy-TCrrQnOzjo8"},
            { name: 'funky guitar', src: "https://docs.google.com/uc?export=download&id=1PZVkORrxs5MawiZo1ZjRMb20FYffrhO0"},
            { name: 'lofi guitar', src: "https://docs.google.com/uc?export=download&id=1Fk9NdNFG5BYs6JKlr3kvv9Co64Ylg5HP"},
            { name: 'piano vibes', src: "https://docs.google.com/uc?export=download&id=1gBRjYpYXT6MTA4pYI0vGVFKUdxTbqIof"},
            { name: 'vintage piano', src: "https://docs.google.com/uc?export=download&id=1G5G-UdPzPl6xBTxbhUGx7H7cl8h_ISV0"}
        ]
    },
    {
        type: 'vfx',
        samples: [
            { name: 'vfx-1', src: "https://docs.google.com/uc?export=download&id=1PLNASfudRaf9vubQFOAHXZnvRBZzr-RG"},
            { name: 'vfx-2', src: "https://docs.google.com/uc?export=download&id=1JR0MvrbvIRTOOSjpe0gsqmdmRxN83Gbf"},
            { name: 'vfx-3', src: "https://docs.google.com/uc?export=download&id=1StwQ5iBLH0o5C7EhvCfGb3y7aBVjQ3fg"},
            { name: 'vfx-4', src: "https://docs.google.com/uc?export=download&id=1WtCqATlepPyZ0X_wFZZNgrDaBhp6aO26"},
            { name: 'vfx-5', src: "https://docs.google.com/uc?export=download&id=1zyMicI1z2xOuvz4njVvBLkJu-gE0ng51"},
            { name: 'vfx-6', src: "https://docs.google.com/uc?export=download&id=1gesNgsymx1XpGCBlxnyJ11LLd2m9wdHI"},
            { name: 'vfx-7', src: "https://docs.google.com/uc?export=download&id=1svbh-Z9KcDc5iKNEnr_zRRNY6Pj0zL8A"},
            { name: 'vfx-8', src: "https://docs.google.com/uc?export=download&id=1_BsB9Kn_sh_W5PGHX2DhgZGBj6hOFtyA"},
            { name: 'vfx-9', src: "https://docs.google.com/uc?export=download&id=1xoYWSvqS3HZ034ZxHvCq9UgKltjzIcgm"}
        ]
    }
]

export default sounds











