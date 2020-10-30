interface GetHtmlProps {
  title: string;
  thumbnail_bg?: string;
}

export function getHtml({
  title,
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  
    <style>
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        color: #FFF;
        background: var(--background);
        /*
        background-image: 
          radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
          radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
        */
        background-size: 100px 100px;
        height: 100vh;
      }
  
      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
  
      svg {
        height: 40px;
        margin-top: 80px;
      }
  
      h1 {
        font-size: 62px;
        line-height: 80px;
  
        max-width: 80%;
      }


      /* New */
      :root {
        --size: 1;
        --background: #181818;
        --color1: #1b2b43;
        --color2: #a3ffbf;
      } 

      .ticket-visual_visual {
          width: 650px;
          height: 320px;
          margin: 100px auto;
          position: relative;
          transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
          background: linear-gradient( to right, var(--color1), var(--color2) );
          border-radius: 20px;
          padding: 5px;
      }

      .ticket-visual-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        background: var(--background);
        border-radius: 15px;
      }

      .ticket-profile_image {
        width: calc(82px * var(--size));
        height: calc(82px * var(--size));
        border-radius: 50%;
      }

      .ticket-profile_name {
        font-size: calc(32px * var(--size));
        margin: 10px 0 5px 20px;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      
      <div class="ticket-visual_visual" id="ticket">
        <div class="ticket-visual-wrapper">
          <img class="ticket-profile_image" src=${`https://unavatar.now.sh/github/${title}`} />
          <h1 class="ticket-profile_name">${title}</h1>
        </div>
      </div>

    </div>
  </body>
  </html>`
}