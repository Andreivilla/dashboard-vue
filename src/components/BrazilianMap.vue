<template>
  <div class="map-wrapper">
    <div ref="scaler" class="map-scaler">
			<ul id="map">
				<li id="crs" estado="rs"><a href="#rs" id="rs" data-cod="43" data-name="Rio Grande do Sul" title="RS">RS</a></li>
				<li id="csc" estado="sc"><a href="#sc" id="sc" data-cod="42" data-name="Santa Catarina" title="SC">SC</a></li>
				<li id="cpr" estado="pr"><a href="#pr" id="pr" data-cod="41" data-name="Paraná" title="PR">PR</a></li>
				<li id="csp" estado="sp"><a href="#sp" id="sp" data-cod="35" data-name="São Paulo" title="SP">SP</a></li>
				<li id="cms" estado="ms"><a href="#ms" id="ms" data-cod="50" data-name="Mato Grosso do Sul" title="MS">MS</a></li>
				<li id="crj" estado="rj"><a href="#rj" id="rj" data-cod="33" data-name="Rio de Janeiro" title="RJ">RJ</a></li>
				<li id="ces" estado="es"><a href="#es" id="es" data-cod="32" data-name="Espírito Santo" title="ES">ES</a></li>
				<li id="cmg" estado="mg"><a href="#mg" id="mg" data-cod="31" data-name="Minas Gerais" title="MG">MG</a></li>
				<li id="cgo" estado="go"><a href="#go" id="go" data-cod="52" data-name="Goiás" title="GO">GO</a></li>
				<li id="cdf" estado="df"><a href="#df" id="df" data-cod="53" data-name="Distrito Federal" title="DF">DF</a></li>
				<li id="cba" estado="ba"><a href="#ba" id="ba" data-cod="29" data-name="Bahia" title="BA">BA</a></li>
				<li id="cmt" estado="mt"><a href="#mt" id="mt" data-cod="51" data-name="Mato Grosso" title="MT">MT</a></li>
				<li id="cro" estado="ro"><a href="#ro" id="ro" data-cod="11" data-name="Rondônia" title="RO">RO</a></li>
				<li id="cac" estado="ac"><a href="#ac" id="ac" data-cod="12" data-name="Acre" title="AC">AC</a></li>
				<li id="cam" estado="am"><a href="#am" id="am" data-cod="13" data-name="Amazonas" title="AM">AM</a></li>
				<li id="crr" estado="rr"><a href="#rr" id="rr" data-cod="14" data-name="Roraima" title="RR">RR</a></li>
				<li id="cpa" estado="pa"><a href="#pa" id="pa" data-cod="15" data-name="Pará" title="PA">PA</a></li>
				<li id="cap" estado="ap"><a href="#ap" id="ap" data-cod="16" data-name="Amapá" title="AP">PA</a></li>
				<li id="cma" estado="ma"><a href="#ma" id="ma" data-cod="21" data-name="Maranhão" title="MA">MA</a></li>
				<li id="cto" estado="to"><a href="#to" id="to" data-cod="17" data-name="Tocantins" title="TO">TO</a></li>
				<li id="cse" estado="se"><a href="#se" id="se" data-cod="28" data-name="Sergipe" title="SE">SE</a></li>
				<li id="cal" estado="al"><a href="#al" id="al" data-cod="27" data-name="Alagoas" title="AL">AL</a></li>
				<li id="cpe" estado="pe"><a href="#pe" id="pe" data-cod="26" data-name="Pernambuco" title="PE">PE</a></li>
				<li id="cpb" estado="pb"><a href="#pb" id="pb" data-cod="25" data-name="Paraíba" title="PB">PB</a></li>
				<li id="crn" estado="rn"><a href="#rn" id="rn" data-cod="24" data-name="Rio Grande do Norte" title="RN">RN</a></li>
				<li id="cce" estado="ce"><a href="#ce" id="ce" data-cod="23" data-name="Ceará" title="CE">CE</a></li>
				<li id="cpi" estado="pi"><a href="#pi" id="pi" data-cod="22" data-name="Piauí" title="PI">PI</a></li>
			</ul>
    </div>
  </div>
</template>

<script setup>
	import { onMounted, ref, onBeforeUnmount } from 'vue'
	import { eventBus } from '@/eventBus'
	
	const scaler = ref(null)

	function aoClicarNoEstado({ cod, name }) {
    eventBus.emit('estadoSelecionado', { cod, name })
	}


	function calcularScale() {
		const larguraOriginal = 570
		const wrapper = scaler.value?.parentElement
		if (!wrapper || !scaler.value) return
		const scale = wrapper.clientWidth / larguraOriginal
		scaler.value.style.transform = `scale(${scale})`
	}

	onMounted(() => {
		const links = document.querySelectorAll('ul#map li a')
		links.forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault()
				const cod = link.dataset.cod
        const name = link.dataset.name
        aoClicarNoEstado({ cod, name })
			})
		})

		calcularScale()

		window.addEventListener('resize', calcularScale)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', calcularScale)
	})
</script>


<style scoped>

	.active { display:inherit; }
	ul#map {display: block; margin: 0; padding: 0; width: 570px; height: 585px; background-image: url('@/assets/map-sources/img/map.gif');}
	ul#map li {display: block; padding: 0; position: absolute;}
	li#crs {margin-top: 485px; margin-left: 237px; }
	li#csc {margin-top: 467px; margin-left: 292px;}
	li#cpr {margin-top: 416px; margin-left: 281px;}
	li#csp {margin-top: 375px; margin-left: 303px; z-index:9999; }
	li#cms {margin-top: 336px; margin-left: 229px;}
	li#crj {margin-top: 390px; margin-left: 422px; z-index:9999; }
	li#ces {margin-top: 347px; margin-left: 467px; z-index:9999; }
	li#cmg {margin-top: 292px; margin-left: 333px; z-index:9998; }
	li#cgo {margin-top: 264px; margin-left: 301px; z-index:9999; }
	li#cdf {margin-top: 311px; margin-left: 373px; z-index:9999; }
	li#cba {margin-top: 207px; margin-left: 397px;}
	li#cmt {margin-top: 189px; margin-left: 180px;}
	li#cro {margin-top: 199px; margin-left: 104px; z-index:9998; }
	li#cac {margin-top: 185px; margin-left: 0px;}
	li#cam {margin-top: 46px; margin-left: 3px;}
	li#crr {margin-top: 0; margin-left: 133px;}
	li#cpa {margin-top: 40px; margin-left: 219px;}
	li#cap {margin-top: 13px; margin-left: 278px;}
	li#cma {margin-top: 94px; margin-left: 366px; z-index:9999;}
	li#cto {margin-top: 156px; margin-left: 338px;}

	li#cse {margin-top: 221px; margin-left: 519px; z-index:9998;}
	li#cal {margin-top: 211px; margin-left: 518px; z-index:9999;}
	li#cpe {margin-top: 188px; margin-left: 473px;}
	li#cpb {margin-top: 169px; margin-left: 511px; z-index:9999;}
	li#crn {margin-top: 151px; margin-left: 514px;}
	li#cce {margin-top: 121px; margin-left: 473px;}
	li#cpi {margin-top: 120px; margin-left: 406px; z-index:9997;}

	ul#map li a {display: block; text-decoration: none; position: absolute;}
	a#rs {width: 116px; height: 101px; }
	a#sc {width: 81px; height: 53px; }
	a#pr {width: 97px; height: 64px; }
	a#sp {width: 131px; height: 84px; }
	a#ms {width: 106px; height: 104px; }
	a#rj {width: 58px; height: 40px; }
	a#es {width: 33px; height: 51px; }
	a#mg {width: 163px; height: 131px; }
	a#go {width: 108px; height: 108px; }
	a#df {width: 16px; height: 9px; }
	a#ba {width: 136px; height: 148px; }
	a#mt {width: 166px; height: 161px; }
	a#ro {width: 104px; height: 87px; }
	a#ac {width: 108px; height: 62px; }
	a#am {width: 258px; height: 181px;}
	a#rr {width: 87px; height: 103px; }
	a#pa {width: 188px; height: 187px; }
	a#ap {width: 73px; height: 85px; }
	a#ma {width: 102px; height: 139px; }
	a#to {width: 74px; height: 125px; }
	a#se {width: 28px; height: 32px; }
	a#al {width: 46px; height: 27px; }
	a#pe {width: 97px; height: 34px; }
	a#pb {width: 59px; height: 35px; }
	a#rn {width: 53px; height: 33px; }
	a#ce {width: 61px; height: 76px; }
	a#pi {width: 83px; height: 124px; }

	/* Código pronto via http://css.spritegen.com (com alterações nos seletores) */

	a#pa:hover, a#pa:active, a#am:hover, a#am:active, a#mt:hover, a#mt:active, a#ba:hover, a#ba:active, a#ma:hover, a#ma:active,
	a#mg:hover, a#mg:active, a#to:hover, a#to:active, a#pi:hover, a#pi:active, a#go:hover, a#go:active, a#ms:hover, a#ms:active,
	a#rr:hover, a#rr:active, a#rs:hover, a#rs:active, a#ro:hover, a#ro:active, a#ap:hover, a#ap:active, a#sp:hover, a#sp:active,
	a#ce:hover, a#ce:active, a#pr:hover, a#pr:active, a#ac:hover, a#ac:active, a#sc:hover, a#sc:active, a#es:hover, a#es:active,
	a#rj:hover, a#rj:active, a#pb:hover, a#pb:active, a#pe:hover, a#pe:active, a#rn:hover, a#rn:active, a#se:hover, a#se:active,
	a#al:hover, a#al:active, a#df:hover, a#df:active
	{ display: block; background: url('@/assets/map-sources/img/sprite.gif') no-repeat; }

	a#pa:hover, a#pa:active { background-position: -10px -0px; width: 188px; height: 187px; }
	a#am:hover, a#am:active { background-position: -10px -197px; width: 258px; height: 181px; }
	a#mt:hover, a#mt:active { background-position: -10px -388px; width: 166px; height: 161px; }
	a#ba:hover, a#ba:active { background-position: -10px -559px; width: 136px; height: 148px; }
	a#ma:hover, a#ma:active { background-position: -156px -559px; width: 102px; height: 139px; }
	a#mg:hover, a#mg:active { background-position: -10px -717px; width: 163px; height: 131px; }
	a#to:hover, a#to:active { background-position: -183px -717px; width: 74px; height: 125px; }
	a#pi:hover, a#pi:active { background-position: -10px -858px; width: 83px; height: 124px; }
	a#go:hover, a#go:active { background-position: -103px -858px; width: 108px; height: 108px; }
	a#ms:hover, a#ms:active { background-position: -103px -976px; width: 106px; height: 104px; }
	a#rr:hover, a#rr:active { background-position: -10px -992px; width: 87px; height: 103px; }
	a#rs:hover, a#rs:active { background-position: -107px -1090px; width: 116px; height: 101px; }
	a#ro:hover, a#ro:active { background-position: -10px -1201px; width: 104px; height: 87px; }
	a#ap:hover, a#ap:active { background-position: -10px -1105px; width: 73px; height: 85px; }
	a#sp:hover, a#sp:active { background-position: -124px -1201px; width: 131px; height: 84px; }
	a#ce:hover, a#ce:active { background-position: -186px -388px; width: 61px; height: 76px; }
	a#pr:hover, a#pr:active { background-position: -124px -1295px; width: 97px; height: 64px; }
	a#ac:hover, a#ac:active { background-position: -10px -1298px; width: 108px; height: 62px; }
	a#sc:hover, a#sc:active { background-position: -128px -1369px; width: 81px; height: 53px; }
	a#es:hover, a#es:active { background-position: -208px -0px; width: 33px; height: 51px; }
	a#rj:hover, a#rj:active { background-position: -186px -474px; width: 58px; height: 40px; }
	a#pb:hover, a#pb:active { background-position: -10px -1370px; width: 59px; height: 35px; }
	a#pe:hover, a#pe:active { background-position: -10px -1415px; width: 97px; height: 34px; }
	a#rn:hover, a#rn:active { background-position: -186px -524px; width: 53px; height: 33px; }
	a#se:hover, a#se:active { background-position: -208px -61px; width: 28px; height: 32px; }
	a#al:hover, a#al:active { background-position: -208px -103px; width: 46px; height: 27px; }
	a#df:hover, a#df:active { background-position: -208px -140px; width: 16px; height: 9px; }

	/* Fim sprite */

	ul#map li a img {border: 0; width: inherit; height: inherit;
	}

	.active {
		display: inherit;
	}

	ul#map {
		display: block;
		margin: 0;
		padding: 0;
		/*width: 570px;
		height: 585px;*/
		background-image: url('@/assets/map-sources/img/map.gif');
	}

	ul#map li {
		display: block;
		padding: 0;
		position: absolute;
	}

.map-wrapper {
  width: 100%;
  max-width: 100%; /* respeita o pai */
  aspect-ratio: 570 / 585;
  position: relative;
  overflow: hidden;
}

.map-scaler {
  transform-origin: top left;
  width: 570px;
  height: 585px;
}

a {
  text-decoration: none !important;
  color: var(--primary-color);
	font-family: var(--primary-font-family);
  font-weight: 600; 
  font-size: 14px;
}


</style>
