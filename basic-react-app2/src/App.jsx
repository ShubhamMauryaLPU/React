import "./App.css";
import Card from "./Card.jsx";
import ArrayR from "./ArrayR.jsx";
import Element from "./Element.jsx";
import Product from "./Product.jsx";
import Activity from "./Activity.jsx";
function App(){
  let options=["marvel","Hollywood"];
  let options2={a:"fast",b:"smooth"};
  let opts=[<li>fast</li>,<li>smooth</li>];
  return(
    // <>
    // <Card title="Iron_man" image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAEBQYDAAIHAQj/xAA4EAACAQMDAgQEBAUEAgMAAAABAgMABBEFEiExQQYTUWEiMnGBBxSRoSNCscHwFVLR4WKCFiUz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EACkRAAICAQQCAQMEAwAAAAAAAAECAAMRBBIhMRNBMgUzURQiYXEjcqH/2gAMAwEAAhEDEQA/AEtlB5G47sA8laP6x5A6jip9LiVLnLMSPentjMszhFRsH9K2JjEQV9wfpXbaG7U1a0DZ45FdDaAdK7aZ2Yt8rFEwRjHxDIrcwYHSu0WAOldOzBZrdGB2rg1nbWLGKaUAb41ZkGM5IHFMCoY4xW1ufJgmK4yFJBIyAcdTRqVUk7oOwsPjDPw+020s9UjuLxIVlSPd5sgGQPqecU1/FTUor/wzJp+nSNKZ1Y7kB2yYU4XPfnB+1TvhLXIbzXS2r20cpI2YdRx/anv4neJLLSNNXTrOBGkmCtlf5BkYA9CTj6Vj6gacXHAmnS1prGZ5P4XX+FJavncsYcA9uTx/SjrmIDII5ovwhEt7ZXV4FUyZVScc8gsf3Y12vYjk8Vo0g+IExS4/5DJ6dQMihArZ9qPuUIYk1gg3DjFce5QzIpXVhgUSU2j4qyZdwzioxOg8YBfmtXj3HPFdGQocivnmNVZx55mM4KUI2H7UXLk9SKwk2jpVG7h0PErTHvOc020+58nyBH8ZHzj2pKsmOlEWs5V8g0aAllZTrNcnj4COvofStHwspTG4HvSOxv3UhQudxxVJbQ/w8ydc9PSiA5gyMQYwZPHeun5Qqc04it4mGVYe4rrKIF2gHk9PeoBycSMxSLck0TaW4RsuMqeorvdTWtnGZLmVIlHVnbFK9b1tbPT43s9pkuULwuw42Y4bHuenrg1zOiDJMIlb2HCiKvM0Xw34kSPVpHEJj3IyNgjngcKe2KWeMvEOk3lpNLbTyS3UxKqHXiKPsc924HSoi4vJ76Az3E8jzhyWZm655o3wvYre3bNcFCFQhRJyNx9fpWI4G8sJuaesMFrxzKb8ONStLc39ndTxW3nCNohMwQtgbR17+1U13aHzCp59COlSbeCYpdV0+wS/jluJ8eb5akiNTzu9s1UGzuPDfl6VYWavLtYpFM20EDqxNOU6wINjDiA1X09w/B5gVxo+/wDlyPpSy50SSPLQoSfSnjeKbnS5jH4j0ZbFMbgBNvdl9QMdKNsfEmg61I0FhcfxMZ2SIUP2z1pxbKn6MznpurPIkPJaTbTuXDD1rIxOVzgDFWWpRRcjysEdD1zU1cwhpMNx96sQR3KZzAY4PMUnHNB3EWxulMUcwuEGOa+XUSSc57ZquJMRy/NWDc9aLmXaTmg5DjpQHh06lGsmcZBGenvRMXBzWB3sY92Pg4Xb6e/vRUWD14NFGfcDCoLkxOp6YOadLrW51yeMc80hWPdzWn5U8FRj6VYHEqRmVkF+Qu9WxQup6nJbReblQ/q3IUeuKzsFPkJkdDUx4mviZXiBOfM2cdscH/PeuscqmfzC0Vb3/qNdHgjvkk1G+El1PFI8myVvheNVyB7ZPX24pXqn5+e6afU4pIZJV3IZBjcvTheqgZxzVB4a1RrWOMrADZhGj2sCWYkH4uemGxQmopLdOfMDyserFs/qe9TXoPMMjqMrf4jz1IaPRY1cB5mZRyQKfw+H9Rmt/wD6m0E0seM25cIWXHzLkjOP7is5LeW1uMoMODkFh0rvYXz22oxXMrSSeXJvcCVlL+2RyOeOOxNI36VqWw01aWreslO5W+Bbm9ttSkk1y1/JWcJ3O3kFSzL1AwMMBwDgntxRHjnW72+1cXUNobMQWbSWNwxy7c5Zsdj047Uv0651fX7+O7u3xHEQsUCoBHGM8BV6e+fWvvjiX/Sri3upmhaFEIcRptcFj19O33oVYrwd3crq6dWFFhPH/Yp8N3tr4ijk0vWT5sk4LRXZPx7vc1Ga9plz4d1kxbiCpzHKvG4eta/nFbX2lhmWNZZ8h15C5OfQZxTfx1epeW0K3SiO+hO1gMkMPUH0NKglWxNFxXqNKXHBEbaVqZ1jTY5GkG8MEfP8px3pZqUU/mlhllHTjpQX4e/xdSuLZuYjblyM9SGUD+pqr1R7dUbY2VJ528YrYoJdMmeSvUI5AkohLN8faiHI2Z/evkxtyrMj9Ox70DLc5wFJA9KJnEEAZldCl8go6SQFTnmgJ2oDmMVAytYbK2iTdQbs2+jLaRWyBIqEKfm7/SjHiCAJIAhtuNuAaaW8SsKSWkrSnDcEU6g/hIDuzmuEowxwYxtmSNSvH3qG8b2ssOpPOkRaKT41I6DnJz9z/WrK2XLdM5PSkP4hoV0+1kBwHkZNp/mCj5j9yR9c1XUgGsZhKGZXOIdZSQi3gZmCoyrg+nFXHhvQNLulglupSySITt34BbPNeP6ZcN/pkTs4ZVby1A6jHr6VXaT4rW00+KCSdlKlvhEYbGT6/pTq3eSgIrbTA6mt9wcDOD1Gf4gWWlWkzLa7sEAIN3Ge5968+kVRJgHKg5x6mmPiXWBeXLyq5dSBtJXGPakouGnCxRoXmc7VUdSf8/pSutsGxUzkj3H9EXQbj7OcS3sfElpBpypbL5M4HxE9I8dx6mo7xP4gW+nWFg7R+ZkrnJY+p96NXSpikdlGwlu3wzpGMiNe2T69an/E2htpV2EjkMzbQZNo+Q+me9JHTsK946jN+vOotCseBO1jFaazqEVuiCxk8vCuuXDvngkdu/Sn2paBLeWsLX8xSVG8sIvPmIAfjB9M5FSNhdNY30VyPmjcH6jviv0H4tsbS60rR7qGCKeERgBJCRlSuTyOc9aFplR7hv6hbbSmlIQnJnkOn2sGkSzGB23+Tzntk/3wKHuL12J5P0zVZ4isrOK2sUsRGYrhMq8bZBO3JGfUYFS1xp8kOGZODzWjgBcJMhyd3MAbdLyVIz3x1rKaIgfDz70zSQCMp79PSuSxqqguMHsKqEyJAJ9RMQe9DTij7nqaDlK0FhjiHrMcbmf4q1iDfy9KwQhvmwtF28iAfF1owGTzFsYMKtZG8wF2bdjA+lN7e8OAuKSBlyKYK4Ubv5QMkUTbjqcRnuPPz8VqsQzmSZwsa56EnG4+wpf+JhjvWgfTP4lrHCkeOhUjk/bJz+tT91MZL6LzCJH3AsnYAHgfpR3+pWsolWZC0SDDDOPpzWddcXbb6jqVeJN076HYpdeFJmjjVp7WUo+BydzDGR370HcIbd2SVfjHU5/WrLQoE0bT/wA06x+XOVaRDyFXPwn6j+9SniGWO4u2eLBXJwR3/wAGKYavx07ieZWly7ECY2UNnel0uA4G3jZ1LdgB3p9oWgLYTtBqilDcxkxMpwwGPlPPcc49jntS/wADrEuqxG4x8JJG7oDVjrd/GIBeWcPmqkyu0sowilSBkd8Yo+nRHXLRnU1N4AUHOYHomiaZ4Ygmu9RlLrKPjMpw0wHQAdl9z9sVK+KfEUetztDa2sEMXyhUh5A+p/6rPxHPqd1K8t9HNEWIIEqkADtjPtis9E0YXNx5buTkbnYfyjvik3Zt/jX3FcDG4zbR/DVgbGK7uhKWLfwUk4B9M468g4+oq01PWLOPwjhLlzqNmDtjOckscAf8VottC9uIGUCMDGOmB2qLvprq11Ce1Zl8lgdoVRz789T15qmooNJDCF0tvlYq0WaLrk9xr2ntqQQR+ftbYCFJbKEt+o59q9C8Rabax2cSoMEDoO9S2taLbx6GZokRdpHG3sfhNF+EtWS70gRXMm6W3JQBjk7e3P04+1G0d2cq0v8AUtGaSCDEV/bGGXdGOpoK4RwMnqeaq79rZ2JT161P3yKZSVIxTZEzAciIZ6Blprcx0umSlWGI1U0OWUd1znpz0oiN6Dj4681qTjpV1b2YFh6jZYXWOKQqAkmSjA/Yin2j3FpGs8l4qlI4Wc7unAqWt5W4VmJUHIHpmn1vCs3hvXJ+N0dqB9yaOtuxC0gKrsBJczNJO0w+eZ+Oeg+n2o7W1sxq0emaTzDvHmSbi3mNxkg+nWkRkJaNT8qc/TH+fvTzwpZNPqIu5RxH8XsPSspMu+PzNGwhU5M9EuXWPTmjZd0axbSM9h3+3X7V55euDfSbRlQcjIx1q4nmkjlthFllYtuXGd3wnj+tRN/FJDfzxy8uG5NH1pywA9RfSghcn3CtCmSPVYWlA2Z5yeD9favSrW6tLkwNJiTDZS1dCqsOPiORjjOQOvGa8qtFf8zHs4cEEZGa9T0yW403QJTKhW/nkHlzbRlI9oJC+nRj+lCpNnqa3nVNMRnEjvFl41zqAF5dpvj4lVT8W7rjb27D7Uf4YEZ8yRyN5UYxUzLFb3Nzc3sKNHCqjcZR8MYwAAPUntRej6h+XdHyVGcFSe1XRttoJmVajeOXDOcZ9BnipfVmS9/09I4lE0aO0jg8ku2QD9AP3p/5uB7EVIG6MF7J8OXjyq/pgf3prXHIEFo/kcdyk1MLJ4dMUcYeVgIwM5Gfp/nWonRrW50y7ukmRk3IGwR7/wDdVlrJJFFGZiwSNS5OO5BwP2zQ2tXyXTvclQrvGoIA4HJ4/TFX0dFTDeTiP/V9SWs2fxFzyboz60vkkAU5FaQMzMecgfvQl22GI6c9KuZkzCZlPaltzRcrUFM2aXcwtQhWRWruHWNVjRSi4JUfN7mumwf7TWiLUgSCcTSGKUIsuxtjkhG9SOtPbcv/APHr+CDLS3Loipj5vv0pNETny95IzkDPHv8ASvgvGgvZVMsixFFjYIeckcEeh5HNRedtULpq/JZxBbnRL+C4YSWr7UChiCD1OBnB6E8VX6LZrZWW1GU4x5hJ5Zj6Cl+k30jWLW1w8jzswdnfqy4+AZ9uaYxFARxwKjSVAJvnatiG2GM7GIS6zDJ5m3YpIBPHQ5/Y1Pa4sEt60tsCsT//AJ454HGPtxTBJUuNKv5oUUP5e2Jm+YDPOD2BqVmkW4bMRJRDtQv1x2z78VOquRlKgcya1asDd+IysEKThznjk7uK9NXZ/oaR2E2FdS0txISTnHyqO3X/ADv5LCxjILKMCqHTNVkEyW6Sv+XfDMm7hh0+IDnHPPr3zU6RlXuVvYsuBBb6BniWzhwdz7sKeCegNMvDlrFp+qC3m2S7xsYkZ59KP8NWFnrckN7KEsmWT5QreWT+vwjPHHFNNQ0+1tryVbwBXjIdQ5wrg91I/Y0da6r7C0vrDZUi7vxArsGG4eIfKpOAOwpJommNrHi2OzCsFkm+NsdB1NM/EWoW9vPIQGlkDYZE5PHTP29fei/DF/5D3+ty20e0RssbbiWVj1GSOaDrlXhVlfp1bu/AhHjU25uksLRdkMXGB6dCTUtc2qvvQZO3AP2613XUJ76aa6lUKeenP+d/1oaW6Ma9OTXUIVXmUvcmw5g7RLDkjgD96U3j7nzjqab+aZEO4cUtvUDH4KKeoGAJteZUl+FDnLf0oGQcmjZIs/McGhHQjrSrAxhCMQsXK/7f3rc5kXKAAGlKtwSe1M9IuYWPlSthifhJHFEQgnBkPXgcQu02xyqXTI70JqCC+i1fUIf4cUU6bYwvPYfbApybY84XkVy28ux0bWLNoTIbtGcYHIbtj3rtaGFSr6zLaMgOTn1E+kXLvLE7PnIZCPQ5yP6GnrSsIHKn4sYH1qb0rTLn84knlyrAhyWdCuTjpg/Wqm1iO8Dafi5P2q2nBSht0tqiHvH8wdrv8tdXFmp2qmmldp/3Aqf+aSpFsMTE8PGpP1rtPi+1jVJVzuSN2A7cED/mifLEenRF8nphuvQAVmFtxj11OayRM3k2ryPvRWhzpC15KRljbSqD9VIpXc3KiIjNaW4KW25WIZ8A844z0/apziI1DJ5noPhTVIIdNjS4lWOSJsKX4Bzz1rt45Se11RcbvIlCtGmeFDDlR7egpZ4GcS38dnINwndQAwz3qy/Fm0haOOJV5mGIwOgIGf7fvVqb2rORNrWbbqkQj1PNtPu5JbqYeSJpdvmuznONvJHp6fp71b22mvdaTb6VC4U7PMmYnr7VK+GZmn0e7WGPfcyRGIk7RtwuMDJGM8c55NF22oXlpcMqgrcY2sjD4gfpWnpwrjLdzH/UtTWyp8jxNprX8n5kA/lbBbOc0nn64AGBTvUYbq2CLeROjuu7JX5vpSuWNSdtPahqwgVZmLvLEvBVZVU0FOQzHHrTEwKisCfpQXlMXKhTwM57UmOocCK7gYfmgp2J6Yptcxgnp0oGa2LthB96DYJdSAeYHBbMyESXEYJ7FgK3WFYEZbhvhwdrDnB7UGjQqcsBj0zit47xl+G1kkTH0YfvQQygRtgSZXW2oWU6qC4VmAzu4BPtmjDk5EKqV7EEMag7i8mn5mn3OBgMQBgfas081vijmGf/ABJGaYGr4wRmA/Te8y4uXVJdp3oMc5XAH3NGaIoleYGYMPy8uOe+04qJtNSubdRHM7zKeCjHIxTHT71bAT3Vu24CJlKem4YzUveGrPEotBWwcwbwhCl3qVwbmdIYnhbzHb39PemWvJaxQxJZeZ5CEqGc8tz19qkbVysg2kg7SOPpT/xDclrO0dcAPGsmB6sAT+5NYpB3ZnokK2UEewDEby7XYE5wae2h/M20EajkgscewOf6CphjlmbuTmrGKE6TapOcEpbrJj/2UP8Asf3oyoTzMsgKRHn4bX9qfFtisjjIyR7ntVf+KzTXuqQR25I/0+3e6OPUkAfqN1ePR3L6JrkctuR/CcSRkdwTkfsa9fsNRt/FCazfxZV5rCFGQnlCucj9TUIuWxDWufHkep5ppdy9vqF7HbswTzlkTb6HOP8APenbXkkjBp3YMo2hm7f9VM2B/L39yGwMldoc44G4UzlvjNhShGB8JPHFaFDbUxM2/wDc5IjaW7wyea0kqDIALZH1HpQ/5oSkBQAfevl0YIJFgJjuFwCWQ8dK0YwukAKhWVSFccEj0PrRd+6BA/M03RmEmcEMOAPelF1eSWsm5cbT265FNZVMsDpuQAqRneBmkVygmiNtKcSQkbXHuf6f81ztiSg5hIheYCQgEOM5HpWDQnBWMNgHBNfLHUZYLbZ5e5QThSenrRcV/ayx2ztHtErFZJf5FP8Ama4WLjmWFTE8SUSJd+OQPY19lt0Qcbvua5XKXIEZBMDKDaTzx2roMqcgkfSuVylmEYzGFhO7zxxyHepz830p9dwoun3iqoVREeB9M1yuU7SP2GK2cOJMWajzG9kYiir12bT4ATwF/vX2uVlv8psUfaf+oBaKHu4VYZVpFBH3q/1rbJpkcjIu590R4/l6/wBVFcrlPU/baZl33Fkbc/xtOtXf5oyYwR/t4x/WvRPwlJZbjJ+e3ZT9BXyuUvX8xDP9toowY7u7MZKsXj+Idfmk/wCB+lGwoLuZY5jkNFvyOoPsa5XKeT4mZj/KJC7JLgc89/rTGAl9QVCThVyK5XKrO9TdAQqtuJO7qQOKUqx89ZeN5IUn1GP+hX2uVc9SsKeFIb2MoOJVG8E8E5IzX2e1iTw1cFFKmLUVCkHsRzXyuUG0dR3R9v8A6mf/2Q==" features={options} />
    // <Card title="Captain america" image="data:image/jpeg;base64,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"/>
    // <Card title="Thanos" image="data:image/jpeg;base64,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" />

    // </>
    <>
    for ArrayR
      <ArrayR title="Mobile Phone"
              price={30000}
              features={options2}
      />
      <ArrayR title="Laptop" price={70000} feature={options} />
      <ArrayR title="Ipad" price={40000}  features={options2} />
    </>
    // <>
    //   {/* for Element.jsx */}
    //   <Element 
    //   title="Mobile Phone" 
    //   price={30000}
    //   features={options} />
    // </>
    // <>
    //   {/* for Product.jsx */}
    //   <Product 
    //    title="Mobile Phone" 
    //    price={30000}
    //    />
    //   <Product 
    //    title="Laptop" 
    //    price={40000}
    //    />
    // </>
    // <>
    //   <Activity color="blue" name="shubham" />
    // </>
  );
}
export default App;