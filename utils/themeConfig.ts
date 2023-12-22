export const colorThemesArray = [
    "light-default",
    "dark-default",
    "light-rose",
    "dark-rose",
    "light-orange",
    "dark-orange",
    "light-green",
    "dark-green",
  ]


export const colorThemes = [
      {
        name: "default",
        css_var: "default",
      },
      {
        name: "Rose",
        css_var: "rose",
      },
      {
        name: "Orange",
        css_var: "orange",
      },
      {
        name: "Green",
        css_var: "green",
      },
]

export const themeModes = [
    {
      name: "Light",
      css_var: "light",
    },
    {
      name: "Dark",
      css_var: "dark",
    }
  ];

  export const getResolvedMode = (resolvedTheme:string|undefined,theme:string)=>{
    if (!theme) {
      return`${"light"}-${resolvedTheme?.split("-")[1]}`;
    } else {
    
    if(!resolvedTheme){
      return`${theme}-${"rose"}`   
    }
    else{
      return`${theme}-${resolvedTheme?.split("-")[1]}`
    }}
  }

  export const getResolvedColorTheme = (resolvedTheme:string|undefined,theme:string)=>{
    if (!theme) {
      return`${resolvedTheme?.split("-")[0]}-${"rose"}`;
    } else {
    
    if(!resolvedTheme){
      return`${"light"}-${theme}`    
    }
    else{
      return`${resolvedTheme.split("-")[0]}-${theme}`
    }}
  }