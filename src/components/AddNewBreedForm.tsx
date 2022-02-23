import React, {useState} from 'react';
import {ICat, IImage} from "../types/types";
import {Button, Container, Form, FormGroup} from "react-bootstrap";
import {Input, Label} from "reactstrap";
import {useInput} from "../hooks/useInput";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css"
import StarsBreedButtonComponent from "./StarsBreedButton/StarsBreedButtonComponent";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CatActionType} from "../types/cat";
import {useDispatch} from "react-redux";
import {FormattedMessage, FormattedPlural} from "react-intl";
import {useIntl} from "../i18n/Intl";
import AddNewBreedFromFile from "./AddNewBreedFromFile";


const AddNewBreedForm = () => {
    const origin =[
        'Australia',
        'Burma',
        'Canada',
        'China',
        'Cyprus',
        'Egypt',
        'France',
        'Greece',
        'Iran',
        'IsleOfMan',
        'Japan',
        'Norway',
        'Russia',
        'Singapore',
        'Somalia',
        'Thailand',
        'Turkey',
        'UnitedArabEmirates',
        'UnitedKingdom',
        'UnitedStates'
      ]

    const imageInitialState = {
        id: 0,
        url: "",
        width: 0,
        height: 0
    }

    const [breedImage, setBreedImage] = useState<IImage>(imageInitialState)

    const catInitialState = {
        id: "",
        name: "",
        origin: "",
        description: "",
        country_code: "",
        temperament: "",
        life_span_max: 0,
        life_span_min : 0,
        image: breedImage,
        adaptability: 0,
        affection_level: 0,
        dog_friendly: 0,
        energy_level: 0,
        experimental: 0,
        grooming: 0,
        hairless: 0,
        child_friendly: 0,
    }

    const [catBreed, setCatBreed] = useState<ICat>(catInitialState)
    const dispatch = useDispatch()
    const catsArray = useTypedSelector(state => state.cat)
    const [temperament, setTemperament] = useState([""])
    const [currentCatToLoad, setCurrentCatToLoad] = useState<number>(1)
    const [image, setImage] = useState<string>("")
    const [imageLoad, setImageLoad] = useState(false)
    const [testState, setTestState] = useState<ICat[]>([])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if( checkError() == true) {
            alert(formatMessage({ id: "error_with_field" }))
        } else {
            let Cat = catBreed;
            let Image = breedImage
            let catTemperament = "";

            Image.id = 1
            Image.url = image
            Image.width = 100
            Image.height = 100
            setBreedImage(Image)

            for (let i = 0; i < temperament.length; i ++){
                catTemperament += temperament[i]
            }

            Cat.id = nameBreed.value
            Cat.name = nameBreed.value
            Cat.adaptability = adaptability
            Cat.affection_level = affection_level
            Cat.child_friendly = child_friendly
            Cat.country_code = countyCode.value
            Cat.dog_friendly = dog_friendly
            Cat.energy_level = energy_level
            Cat.experimental = experimental
            Cat.grooming = grooming
            Cat.hairless = hairless
            Cat.image = breedImage
            Cat.life_span_max = maxLifeSpan.value
            Cat.life_span_min = minLifeSpan.value
            Cat.origin = originCat
            Cat.temperament = catTemperament

            setCatBreed(Cat)

            let catArray : string | any[] = []
            catArray = [...catsArray.cats]
            catArray.push(catBreed)

            dispatch({
                type: CatActionType.FETCH_CATS_SUCCESS,
                payload: catArray
            })

            setBreedImage(imageInitialState)
            setCatBreed(catInitialState)
            alert(formatMessage({ id: "breed_add_success" }))
            clearCatFields()
        }
    }

    const checkError = () => {
        if  (nameBreed.isEmpty){
            return true
        }

        if (maxLifeSpan.minLengthError || maxLifeSpan.isEmpty){
            return true
        }

        if (minLifeSpan.isEmpty || minLifeSpan.minLengthError || parseInt(minLifeSpan.value) > parseInt(maxLifeSpan.value)){
            return true
        }

        if  (countyCode.minLengthError || countyCode.isEmpty){
            return true
        }

        if  (temperament.length < 1) {
            return true
        }

        return false
    }

    const clearCatFields = () => {
        let cat = catInitialState
        console.log(cat)
        nameBreed.setValue(cat.name)
        maxLifeSpan.setValue(cat.life_span_max)
        minLifeSpan.setValue(cat.life_span_min)
        countyCode.setValue(cat.country_code)
        setOriginCat(cat.origin)
        setAdaptability(cat.adaptability)
        setAffection_level(cat.affection_level)
        setHairless(cat.hairless)
        setGrooming(cat.grooming)
        setEnergy_level(cat.energy_level)
        setDog_friendly(cat.dog_friendly)
        setChild_friendly(cat.child_friendly)
        setExperimental(cat.experimental)
        let testString : string = cat.image as unknown as string
        setImage(testString)
        let arrayTemperament: string[] = []
        let catTemp = cat.temperament

        arrayTemperament = catTemp!.split(" ")
        setTemperament(arrayTemperament)
    }

    const fillCatFields = () => {
        if(currentCatToLoad < testState.length) {
            let cat = testState[currentCatToLoad]
            nameBreed.setValue(cat.name)
            maxLifeSpan.setValue(cat.life_span_max)
            minLifeSpan.setValue(cat.life_span_min)
            countyCode.setValue(cat.country_code)
            setOriginCat(cat.origin)
            setAdaptability(cat.adaptability)
            setAffection_level(cat.affection_level)
            setHairless(cat.hairless)
            setGrooming(cat.grooming)
            setEnergy_level(cat.energy_level)
            setDog_friendly(cat.dog_friendly)
            setChild_friendly(cat.child_friendly)
            setExperimental(cat.experimental)
            let testString : string = cat.image as unknown as string
            setImage(testString)
            let arrayTemperament: string[] = []
            let catTemp = cat.temperament

            arrayTemperament = catTemp!.split(" ")
            setTemperament(arrayTemperament)
            setImageLoad(true)

            setCurrentCatToLoad(currentCatToLoad + 1)
        }
    }

    const onChangeOrigin = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        console.log(value)
        setOriginCat(value)
    }

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.currentTarget.files && event.currentTarget.files[0]) {
            if(event.currentTarget.files[0].name.includes(".jpg") && event.currentTarget.files[0].name.includes(".jpg")){
                let reader = new FileReader();
                let files = event.currentTarget.files[0];
                reader.readAsDataURL(files)
                reader.onload = (e : ProgressEvent<FileReader>) => {
                    const stringImage = String(reader.result)
                    if(stringImage != null) {
                        setImage(stringImage)
                        setImageLoad(true)
                    }
                }
            } else {
                alert("Only images can load")
            }

        }
    }


    const ImageConvertFromBase64 = (data: string | undefined) => {
        if(imageLoad !== false)
        return <img src={data} width="80" height="80"/>;
        else {
            return <img src={data} />;
        }
    }

    const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const description = event.currentTarget.value
        setCatBreed({...catBreed, description: description})
    }

    const nameBreed = useInput('', {isEmpty: true, minLength: 3})
    const maxLifeSpan = useInput('0', {isEmpty: true, minLength: 1, numbersOnly: true})
    const minLifeSpan = useInput('0', {isEmpty: true, minLength: 1 , numbersOnly: true})
    const countyCode = useInput('0', {isEmpty: true, minLength: 1 , numbersOnly: true})

    const [adaptability, setAdaptability] = useState<number | undefined>(1)
    const [affection_level, setAffection_level] = useState<number | undefined>(1)
    const [dog_friendly, setDog_friendly] = useState<number | undefined>(1)
    const [energy_level, setEnergy_level] = useState<number | undefined>(1)
    const [experimental, setExperimental] = useState<number | undefined>(1)
    const [grooming, setGrooming] = useState<number | undefined>(1)
    const [hairless, setHairless] = useState<number | undefined>(1)
    const [child_friendly, setChild_friendly] = useState<number | undefined>(1)
    const [originCat, setOriginCat] = useState<string | undefined>(" ")

    const { formatMessage } = useIntl();

    return (
        <div>
            <Container>
                <Form onSubmit={(event) => onSubmit(event)}  className='add-breed-form'>
                    <FormGroup>
                        <Label for="name">{formatMessage({ id: "Name" })}</Label>
                        {(nameBreed.isDirty && nameBreed.isEmpty) && <div style={{color:'red'}}>
                            <FormattedMessage id="emptyFieldError" />
                        </div>}
                        {(nameBreed.isDirty && nameBreed.minLengthError) && <div style={{color:'red'}}>
                            <FormattedMessage id="minimumLength" />
                            3
                            <FormattedPlural value={3} one={<FormattedMessage id="symbol" />} other={<FormattedMessage id="symbols"/>} />
                        </div>}
                        <Input type="text" placeholder={formatMessage({ id: "name" })} autoFocus
                               value={nameBreed.value}
                               onChange={e => nameBreed.onChange(e)}
                               onBlur={e => nameBreed.onBlur(e)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">{formatMessage({ id: "Description" })}</Label>
                        <Input type="text" placeholder={formatMessage({ id: "description" })}
                               value={catBreed.description}
                               onChange={onDescriptionChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="maxLifeSpan">{formatMessage({ id: "LifeSpanMax" })}</Label>
                        {(maxLifeSpan.isDirty && maxLifeSpan.isEmpty) && <div style={{color:'red'}}>
                            <FormattedMessage id="emptyFieldError" />
                        </div>}
                        {(maxLifeSpan.isDirty && maxLifeSpan.minLengthError) && <div style={{color:'red'}}>
                            <FormattedMessage id="minimumLength" />
                            1
                            <FormattedPlural value={3} one={<FormattedMessage id="symbol" />} other={<FormattedMessage id="symbols"/>} />
                        </div>}
                        <Input type="text" placeholder={formatMessage({ id: "LifeSpanMax" })}
                               value={maxLifeSpan.value}
                               onChange={e => maxLifeSpan.onChange(e)}
                               onBlur={e => maxLifeSpan.onBlur(e)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="minLifeSpan">{formatMessage({ id: "LifeSpanMin" })}</Label>
                        {(minLifeSpan.isDirty && minLifeSpan.isEmpty) && <div style={{color:'red'}}>
                            <FormattedMessage id="emptyFieldError" />
                        </div>}
                        {(minLifeSpan.isDirty && minLifeSpan.minLengthError) && <div style={{color:'red'}}>
                            <FormattedMessage id="minimumLength" />
                            1
                            <FormattedPlural value={3} one={<FormattedMessage id="symbol" />} other={<FormattedMessage id="symbols"/>} />
                        </div>}
                        {(parseInt(minLifeSpan.value) > parseInt(maxLifeSpan.value)) && <div style={{color:'red'}}>
                            <FormattedMessage id="errorLifeSpan" />
                        </div>}
                        <Input type="text" placeholder={formatMessage({ id: "LifeSpanMin" })}
                               value={minLifeSpan.value}
                               onChange={e => minLifeSpan.onChange(e)}
                               onBlur={e => minLifeSpan.onBlur(e)}
                        />
                    </FormGroup>

                    {(temperament.length < 1) && <div style={{color:'red'}}>
                        <FormattedMessage id="emptyFieldError" />
                    </div>}
                    <ReactTagInput
                        tags={temperament}
                        onChange={(newTemp) => setTemperament(newTemp)}
                    />

                    <FormGroup>
                        <Label for="countyCode">
                            <FormattedMessage id="CountryCode" />
                        </Label>
                        {(countyCode.isDirty && countyCode.isEmpty) && <div style={{color:'red'}}>
                            <FormattedMessage id="emptyFieldError" />
                        </div>}
                        {(countyCode.isDirty && countyCode.minLengthError) && <div style={{color:'red'}}>
                            <FormattedMessage id="minimumLength" />
                            1
                            <FormattedPlural value={3} one={<FormattedMessage id="symbol" />} other={<FormattedMessage id="symbols"/>} />
                        </div>}
                        <Input type="text" placeholder={formatMessage({ id: "CountryCode" })}
                               value={countyCode.value}
                               onChange={e => countyCode.onChange(e)}
                               onBlur={e => countyCode.onBlur(e)}
                        />
                    </FormGroup>

                    <FormGroup>
                    <Label for="origin">
                        <FormattedMessage id="Origin" />
                    </Label>
                        <br/>
                    <select value={originCat} onChange={onChangeOrigin} >
                        <option value="DEFAULT" disabled>
                            ...
                        </option>
                        {origin.map(orig =>
                            <option key={orig} value={orig}>{orig}</option>
                        )}
                    </select>
                    </FormGroup>

                    <FormGroup>
                        <div>
                            {ImageConvertFromBase64(image)}
                            <div>
                                <FormattedMessage id="SelectImage" />
                            </div>
                            <input type="file" name="myImage" onChange={onImageChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <br/>
                        <div>
                            <StarsBreedButtonComponent
                                amountStars={adaptability as number}
                                characteristics={formatMessage({ id: "Adaptability" })}
                                setValue={setAdaptability}
                            />
                            <StarsBreedButtonComponent
                                amountStars={affection_level as number}
                                characteristics={formatMessage({ id: "Affection" })}
                                setValue={setAffection_level}
                            />
                            <StarsBreedButtonComponent
                                amountStars={dog_friendly as number}
                                characteristics={formatMessage({ id: "Dog_friendly" })}
                                setValue={setDog_friendly}
                            />
                            <StarsBreedButtonComponent
                                amountStars={energy_level as number}
                                characteristics={formatMessage({ id: "Energy_level" })}
                                setValue={setEnergy_level}
                            />
                            <StarsBreedButtonComponent
                                amountStars={experimental as number}
                                characteristics={formatMessage({ id: "Experimental" })}
                                setValue={setExperimental}
                            />
                            <StarsBreedButtonComponent
                                amountStars={grooming as number}
                                characteristics={formatMessage({ id: "Grooming" })}
                                setValue={setGrooming}
                            />
                            <StarsBreedButtonComponent
                                amountStars={hairless as number}
                                characteristics={formatMessage({ id: "Hairless" })}
                                setValue={setHairless}
                            />
                            <StarsBreedButtonComponent
                                amountStars={child_friendly as number}
                                characteristics={formatMessage({ id: "Child_friendly" })}
                                setValue={setChild_friendly}
                            />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <h1></h1>
                        <Button size="sm" color="primary" type="submit">
                            <FormattedMessage id="confirm" />
                        </Button>{' '}
                    </FormGroup>
                </Form>
                <div>
                    <AddNewBreedFromFile setCatBreed={setTestState}/>
                    <Button onClick = {fillCatFields}>
                        <FormattedMessage id="next_breed" />
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default AddNewBreedForm;
