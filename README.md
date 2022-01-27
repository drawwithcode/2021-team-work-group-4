![logo](images/logo.png)


# About
METANOISE is a virtual space created for the course of Creative Coding at Politecnico di Milano. 
If there was a button to restart your whole life, would you press it? In this website people will be asked to answer to question like the one above, all based on *intrusive thoughts*:  unwanted thoughts that can pop into our heads without warnings. These thoughts, that reveal parts of the inner reality of a human being, regard 5 dimensions: identity, beliefs, relationships, sexuality and violence. By answering, the users will leave a path that will be *translated* into an *intimate postcard*. Each postcard is unique: it represents the reflection of the user’s inner self. At the end of the experience the image will be collected in our “archive” where all the postcards generated can be visualized together. Now go find a safe place and enjoy this intimate experience.

**Table of Contents**
1. Project idea<br>
a. [Concept](#concept)<br>
b. [Context of use](#context-of-use)<br>

2. Structure<br>
a. [Homepage](#homepage)<br>
b. [Questions](#questions)<br>
c. [Archive](#archive)<br>

3. The Code<br>
a. [Design challenges](#design-challenges)<br>
b. [Coding challenges](#coding-challenges)<br>

4. [Team](#team)<br>


# Project idea
## Concept
The concept translates the idea of metamorphosis into a translation of data into images. The users' thoughts are processed by the algorithm to obtain a visual representation.

The site proposes itself as a virtual space where people can leave a trace of their cognitions, as a safe place without finding an outlet in the real world.

The user provides data by answering questions on the five spheres of intrusive thoughts: violence, identity, sexuality, religious beliefs and relationships. The questions touch on those mental intrusions defined by Rachman as 'any recurrent, unacceptable, unwanted thought accompanied by subjective emotional distress'. The algorithm interprets how users interact with the questions, returning visualisations to them. All data is recorded locally to ensure privacy protection.

## Context of use
The atmosphere that is generated is particularly intimate: for this reason, the experience requires a certain control over the surrounding environment, which must not present distractions. It is up to each user to choose their preferred device (which is developed to work on both mobile devices - primarily - and desktops).



# Structure

![html](images/html.png)

## Homepage

![homepage](images/homepage.png)


The homepage aims to show the key elements of the site. First the user will see the logo, the naming metanoise indicates a transformation, metamorphosis, in the path from raw data to meaning. The word metanoise is commonly used in the cyber context to refer to inaccurate and irrelevant data, generated in systems with a pattern based on an uncontrolled vocabulary. Declining this meaning within the cognitive sphere, Metanoise represents the set of unconscious and unwanted thoughts that are self-generated and create disturbing noise (discomfort). The animation in the background gives an idea of what the visual mapping of thoughts will look like, the artwork that will be generated at the end of the questions. Thanks to this the user will have the first approach to the result of the project.

Before accessing the questions page, the user will interact with two warnings. The first concerns the use of data, which are temporarily collected anonymously and securely, only to generate the parameters that will define the final work. The second warning is focused on the physical space surrounding the user: the environment must be quiet and comfortable.

![warning1](images/warning1.png) 
![warning2](images/warning2.png)
![warning3](images/warning3.png)

When the user is ready to start he can press play.

## Questions
The web pages dedicated to questions are the main section of the project, and it is where the user can have an experience somewhere between a psychotherapeutic session and a confessional.

All questions are grouped in five categories and have been balanced according to some criteria of coherence: no sensitive or too thorny topics.

Each question was analysed to establish what kind of answers it needed: some answers are articulated through the use of sliders, others through an answer box, others through multiple choice.

![question1](images/question1.png) 
![question2](images/question2.png)
![question3](images/question3.png)

The look and feel of the question section stands out through a darker background colour communicating confidence and calmness. This is why the webpage has no graphic links to the others (homepage and archive): here the user's attention must be maximised to create a final, strictly personal work of art. The visual mapping thoughts should represent the image of the inner debate that these topics will raise.

## Archive

![archive](images/archive.png)

The metamorphosis is completed in the archive: a web page that collects all the images generated by the algorithm. Each visual representation is anonymous and belongs to a single user. Therefore, the archive is a visualisation gallery of our subconscious that tells connections and differences between people without making them explicit.

Metanoise generates the metamorphosis by generating a place where data are collected that are usually considered ephemeral, incomplete, non-identifying, but which concern the emotional sphere, private thoughts and judgements that constitute us as persons, as individual identities. 




# The Code

## Design challenges
The design of the webpage is focused on the overall perception of the user’s experience, a helpful atmosphere created in order to introduce people into their introspective path. The main colors of the page are two different shades of gray: for the homepage and archive a light gray (#DFDEE2), almost aseptic and scientific, while a deeper shade (#2E2D2C) for the section dedicated to questions that suggests an immersive atmosphere of reflection.

![palette](images/palette.png)

The font selected for the project is named Everett, released in 2021 and designed by Paparelli for the foundry type.weltkren. [Directly from the specimen: «Strong typographic details add a high tension while keeping a reading comfort, finding the right balance between a font that is graphic yet fluid.»] 
The symmetry of the font puts the user in a visually comfortable situation, the interruptions of the lines refer to the concept of METANOISE: the recording of ephemeral data, usually defined as useless, that inside the project become protagonists. 

Another challenge refers to the parameterization of the artwork. The visual parameters taken into consideration are:
* The number of the squares per grid,
* The color palette, 
* The specific shade of each color,
* The blur effect of the overall image created.

The grid is determined by the average of characters typed within the open questions:

![grid](images/grid.png)
 
> 1 to 16 characters = 6x6 grid, 17 to 33 = 9x9 grid, 34 to infinity = 12x12 grid.

Each section has been assigned a color in two different shades. The percentage of a particular color is determined by the time spent in the section associated with it: if in an artwork is strong the presence of red, it means that the user treats the subject of violence with caution, taking more time to get to the bottom of what you think. The hue is determined by the option of your choice. 

![ego](images/ego.png)
![palette2](images/palette2.png)

We’ve also assigned two different shades to each color connected to the intrusive thoughts (violence: #FE0000, #FF6432; sexuality: #FF1493, #FE3EEF; identity: #7722F6, #B44EF2; beliefs: #1D64FF #37C3FF; relationships: #ABFF38, #D6FA26). The percentage of a particular color is defined by the time spent by the users on each section: if an artwork characterized by a strong presence of red, it means that an user treats the subject of violence with caution. The hue is determined by the option chosen by the user on the multiple choice kind of answers. 

![blur](images/blur.png)

Finally, the blur effect is defined by the average percentage of the sliders: the closer you are to the center, sharper the image.




## Coding challenges

<!--  #### Inline code

`$ npm install marked`

#### Javascript　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML code

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```
-->


# Team
Meet the team Creative Cose 
![team](images/team.png)




## Credits
Draw With Code: Creative Coding 2021/2022 <br>
Politecnico di Milano – Dipartimento di Design

### Faculty
- Michele Mauri
- Tommaso Elli
- Andrea Benedetti

*2021-team-work-group-4 created by GitHub Classroom*
