import { useState } from 'react';
import './mtl.scss';

function Mtl() {
  const [dochange, setDochange] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 left-area">
          <div className="row logo">
            <div className="col-12 logoimg">1</div>
            <div className="col-12"></div>
            <div className="box"></div>
          </div>
          <div className="menu col"></div>
        </div>
        <div className="col mid-area">
          <div className="btn">
            <button
              onClick={() => {
                setDochange(!dochange);
              }}
            >
              test
            </button>
          </div>
          <br />
          <div
            className="prodarea"
            style={dochange ? { display: 'none' } : { display: 'inline' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            omnis itaque modi magni molestiae sed enim dolor tenetur labore
            officia inventore atque, veritatis, voluptate nesciunt consequuntur,
            dolorem laborum corrupti esse. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nam quae fuga natus incidunt nemo,
            enim molestiae. Commodi animi odit quia hic deserunt! Dicta facere
            deleniti eligendi quam doloribus velit? Sit? Cumque ut, a beatae
            iure neque officiis unde corporis molestias consequatur. Provident
            ratione ea magni voluptatem omnis molestias dolorem. Amet esse
            dolores impedit consectetur a officiis repellendus optio nemo dolor.
            Laborum mollitia reiciendis rerum nihil necessitatibus quia neque,
            aut tempora minus at ducimus doloribus praesentium ullam autem magni
            placeat pariatur? Eveniet expedita voluptatum nobis quod similique
            reiciendis libero amet delectus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto omnis itaque modi magni
            molestiae sed enim dolor tenetur labore officia inventore atque,
            veritatis, voluptate nesciunt consequuntur, dolorem laborum corrupti
            esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            quae fuga natus incidunt nemo, enim molestiae. Commodi animi odit
            quia hic deserunt! Dicta facere deleniti eligendi quam doloribus
            velit? Sit? Cumque ut, a beatae iure neque officiis unde corporis
            molestias consequatur. Provident ratione ea magni voluptatem omnis
            molestias dolorem. Amet esse dolores impedit consectetur a officiis
            repellendus optio nemo dolor. Laborum mollitia reiciendis rerum
            nihil necessitatibus quia neque, aut tempora minus at ducimus
            doloribus praesentium ullam autem magni placeat pariatur? Eveniet
            expedita voluptatum nobis quod similique reiciendis libero amet
            delectus. Dicta fugiat magnam at perferendis debitis fugit?
            Voluptatum molestias numquam vero fugit laborum totam iusto quaerat,
            alias voluptas asperiores quae velit veniam aliquid. Fuga fugiat
            laborum cumque, non quasi iure? Perferendis at nulla dolor porro
            iusto, repellendus pariatur, similique nihil veniam modi quae
            magnam, voluptatem veritatis ab optio dicta impedit cumque
            consequuntur? Vel velit sunt obcaecati perferendis suscipit quae
            nobis? Saepe sapiente culpa at, inventore velit neque ipsum
            quibusdam recusandae consequatur accusantium amet, dolorem rerum
            natus consequuntur voluptate harum dolorum, assumenda earum ex magni
            dicta id facere vitae quia. Natus. Ipsam quo suscipit, eos quasi
            blanditiis ratione. Possimus eligendi veritatis eius deserunt quae
            tenetur soluta illum temporibus, dolores at ut sequi blanditiis
            asperiores in iure. Saepe nam atque quas ratione. Veniam quas animi
            temporibus nisi pariatur facere et voluptates! Suscipit deleniti
            laboriosam labore sint accusamus, quisquam perspiciatis maxime
            officia? Est nobis magnam laborum? Exercitationem enim totam natus
            error asperiores! Officiis. At inventore cum labore quo animi
            ratione. Laboriosam porro excepturi, repellat velit accusamus
            laborum ipsum, pariatur sit illum et, obcaecati debitis autem cumque
            labore! Corporis quae voluptatem dicta placeat soluta? Pariatur est
            commodi velit cumque deleniti a placeat iusto natus, sequi corrupti
            ratione, suscipit sint et veniam repudiandae reiciendis neque
            tempora quaerat autem nemo corporis dolore. Quos impedit repellat
            reiciendis.
          </div>
          <div
            className="testarea"
            style={
              dochange
                ? { transform: 'translateX(0%)' }
                : { transform: 'translateX(-150%)' }
            }
          >
            test
          </div>
        </div>
        <div className="col-6 right-area">3</div>
      </div>
    </div>
  );
}

export default Mtl;
