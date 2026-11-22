export interface Product {
  slug: string;
  name: string;
  category: string;
  categoryKey: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  applications: string[];
}

export interface ImageItem { title: string; category: string; image: string; alt: string; }

export const products: Product[] = [
  { slug:'tranquillo', name:'Tranquillo', category:'Sandwich Roof Panels', categoryKey:'sandwich', description:'Insulated roofing panels designed to provide durable and efficient roof coverage for modern buildings.', image:'/images/roll-forming-machine.webp', imageAlt:'Roll-forming machine used to shape metal roofing sheets in a factory.', features:['Insulated panel construction','Practical roof coverage','Finishes available on request'], applications:['Commercial buildings','Industrial facilities','Project-specific applications'] },
  { slug:'massimo', name:'Massimo', category:'Sandwich Cladding Panels', categoryKey:'sandwich', description:'Modern sandwich cladding panels suitable for commercial, industrial and architectural applications.', image:'/images/roll-forming-machine.webp', imageAlt:'Roll-forming machine used to shape metal roofing sheets in a factory.', features:['Modern exterior profile','Panelized cladding format','Finishes available on request'], applications:['Commercial exteriors','Industrial facilities','Architectural applications'] },
  { slug:'sicuro', name:'Sicuro', category:'Cladding Panels', categoryKey:'cladding', description:'Durable cladding solutions designed to provide attractive and practical exterior coverage.', image:'/images/roll-forming-machine.webp', imageAlt:'Roll-forming machine used to shape metal roofing sheets in a factory.', features:['Contemporary cladding finish','Designed for exterior coverage','Finishes available on request'], applications:['Building exteriors','Commercial spaces','Project-specific applications'] },
  { slug:'farrago', name:'Farrago', category:'Tile Profile Sheets', categoryKey:'profile', description:'Tile-profile roofing sheets that combine a traditional appearance with modern roofing performance.', image:'/images/roof-installation.webp', imageAlt:'Roofing crew installing a pitched roof on a building.', features:['Tile-inspired profile','Roofing sheet format','Color options available on request'], applications:['Residential roofs','Renovation projects','Project-specific applications'] },
  { slug:'trapezoidal-profile', name:'Trapezoidal Profile Sheet', category:'Roofing Sheets', categoryKey:'roofing', description:'Versatile profiled sheets suitable for a wide range of roofing and construction applications.', image:'/images/roof-installer.webp', imageAlt:'Roofer using a drill while working on a rooftop.', features:['Defined trapezoidal profile','Versatile sheet format','Finishes available on request'], applications:['Roofing projects','Commercial buildings','Industrial facilities'] },
  { slug:'trapezoidal-crimp', name:'Trapezoidal Crimp Sheets', category:'Roofing Sheets', categoryKey:'roofing', description:'Crimped roofing sheets designed to provide structural performance with an attractive finish.', image:'/images/roof-installation.webp', imageAlt:'Roofing crew installing a pitched roof on a building.', features:['Crimped sheet profile','Distinctive roof appearance','Finishes available on request'], applications:['Roofing projects','Architectural applications','Project-specific applications'] }
];

export const categories = [
  { key:'sandwich', title:'Sandwich Roof Panels', description:'Insulated panel options for roofing projects.', image:products[0].image },
  { key:'sandwich', title:'Sandwich Cladding Panels', description:'Panelized exterior solutions for modern buildings.', image:products[1].image },
  { key:'cladding', title:'Cladding Panels', description:'Practical finishes for building exteriors.', image:products[2].image },
  { key:'profile', title:'Tile Profile Sheets', description:'A familiar roof profile in a modern sheet format.', image:products[3].image },
  { key:'roofing', title:'Trapezoidal Profile Sheets', description:'Versatile sheets for a range of applications.', image:products[4].image },
  { key:'roofing', title:'Trapezoidal Crimp Sheets', description:'A distinctive crimped profile for roofing.', image:products[5].image }
];

export const qualityHighlights = [
  { title:'Colors & finishes', description:'Explore different visual finishes and color options for your project.', mark:'01' },
  { title:'Practical installation', description:'Product formats designed with practical installation requirements in mind.', mark:'02' },
  { title:'Durable construction', description:'Roofing solutions developed for dependable use across project types.', mark:'03' },
  { title:'Product guidance', description:'Get information about suitable products and specifications on request.', mark:'04' }
];

export const serviceHighlights = [
  { title:'Product selection', description:'Compare available profiles and panel formats against your project requirements.', image:'/images/roof-installation.webp', imageAlt:'Roofing crew working on a pitched roof.' },
  { title:'Roofing sheet production', description:'See the roll-forming process used to shape metal roofing sheets.', image:'/images/roll-forming-machine.webp', imageAlt:'Roll-forming machine and steel rollers in a roofing sheet factory.' },
  { title:'Roofing application', description:'Talk to our team about product information for your building and location.', image:'/images/roof-installer.webp', imageAlt:'Roofer using a drill on a rooftop near solar panels.' },
  { title:'Project enquiries', description:'Share your roof area, building type and location to begin a product enquiry.', image:'/images/roof-installation.webp', imageAlt:'Workers installing a roof on a new building.' }
];

export const applications = [
  { title:'Residential', description:'Roofing options for homes and residential buildings.', image:'/images/roof-installation.webp' },
  { title:'Commercial', description:'Solutions for offices, shops and commercial spaces.', image:'/images/roof-installer.webp' },
  { title:'Industrial', description:'Roofing and cladding options for industrial facilities.', image:'/images/roll-forming-machine.webp' },
  { title:'Warehouses', description:'Practical roofing options for warehouse structures.', image:'/images/roll-forming-machine.webp' },
  { title:'Agricultural', description:'Products to consider based on project requirements.', image:'/images/roof-installation.webp' },
  { title:'Architectural', description:'Roofing and cladding choices where appearance matters.', image:'/images/roof-installer.webp' }
];

export const galleryItems: ImageItem[] = [
  { title:'Metal sheet roll forming', category:'Manufacturing', image:'/images/roll-forming-machine.webp', alt:'Roll-forming machine used to produce metal roofing sheets.' },
  { title:'Roofing production', category:'Products', image:'/images/roll-forming-machine.webp', alt:'Steel rollers in a metal roofing sheet forming machine.' },
  { title:'Roof installation', category:'Projects', image:'/images/roof-installation.webp', alt:'Workers installing roofing on a building. Representative imagery, not a company project.' },
  { title:'Working on the roof', category:'Roofing', image:'/images/roof-installer.webp', alt:'Roofer working with a drill on a rooftop.' },
  { title:'Roofing crew at work', category:'Installation', image:'/images/roof-installation.webp', alt:'Roofing crew installing a pitched roof on a new building.' },
  { title:'Factory equipment', category:'Manufacturing', image:'/images/roll-forming-machine.webp', alt:'Metal roll-forming equipment in a factory.' }
];

export const company = {
  name:'Indalium', phone:'[Phone number to be added]', email:'[Email address to be added]', address:'[Business address to be added]',
  whatsappNumber:'', workingHours:'[Working hours to be added]',
  stats:[{ value:'15+', label:'Years of experience' },{ value:'500+', label:'Projects completed' },{ value:'2,000+', label:'Customers served' },{ value:'50+', label:'Team members' }]
};

export const sampleTestimonials = [
  { quote:'The product options were explained clearly, which helped us understand what information to prepare for our roofing project.', context:'Sample project enquiry' },
  { quote:'It was straightforward to ask about profiles and finishes and get the details we needed to compare options.', context:'Sample product enquiry' },
  { quote:'The conversation helped us take the next step with our roofing requirements and product selection.', context:'Sample customer feedback' }
];
