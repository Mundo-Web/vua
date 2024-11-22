import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import BaseAdminto from '@Adminto/Base';
import CreateReactScript from '../Utils/CreateReactScript';
import Table from '../Components/Table';
import Modal from '../Components/Modal';
import InputFormGroup from '../Components/Adminto/form/InputFormGroup';
import ReactAppend from '../Utils/ReactAppend';
import DxButton from '../Components/dx/DxButton';
import TextareaFormGroup from '@Adminto/form/TextareaFormGroup';
import SwitchFormGroup from '@Adminto/form/SwitchFormGroup';
import ImageFormGroup from '../Components/Adminto/form/ImageFormGroup';
import Swal from 'sweetalert2';
import BundlesRest from '../Actions/Admin/BundlesRest';
import SelectAPIFormGroup from '../Components/Adminto/form/SelectAPIFormGroup';
import SetSelectValue from '../Utils/SetSelectValue';
import SelectFormGroup from '../Components/Adminto/form/SelectFormGroup';
import CouponsRest from '../Actions/Admin/CouponsRest';
import Number2Currency from '../Utils/Number2Currency';
import { renderToString } from 'react-dom/server';

const couponsRest = new CouponsRest()

const Coupons = ({ }) => {
  const gridRef = useRef()
  const modalRef = useRef()

  // Form elements ref
  const idRef = useRef()
  const nameRef = useRef()
  const descriptionRef = useRef()
  const itemsRef = useRef()
  const percentageRef = useRef()
  const itemsQuantityRef = useRef()
  const comparatorRef = useRef()

  const [isEditing, setIsEditing] = useState(false)

  const onModalOpen = (data) => {
    if (data?.id) setIsEditing(true)
    else setIsEditing(false)

    idRef.current.value = data?.id ?? ''
    nameRef.current.value = data?.name ?? ''
    descriptionRef.current.value = data?.description ?? ''
    SetSelectValue(itemsRef.current, data?.items, 'id', 'name')
    percentageRef.current.value = (data?.percentage ?? 0) * 100
    itemsQuantityRef.current.value = data?.items_quantity ?? ''
    $(comparatorRef.current).val(data?.comparator ?? '=').trigger('change')

    $(modalRef.current).modal('show')
  }

  const onModalSubmit = async (e) => {
    e.preventDefault()

    const request = {
      id: idRef.current.value || undefined,
      name: nameRef.current.value,
      percentage: (percentageRef.current.value || 0) / 100,
      items: $(itemsRef.current).val(),
      description: descriptionRef.current.value,
      items_quantity: itemsQuantityRef.current.value,
      comparator: comparatorRef.current.value
    }

    const result = await couponsRest.save(request)
    if (!result) return

    $(gridRef.current).dxDataGrid('instance').refresh()
    $(modalRef.current).modal('hide')
  }

  const onDeleteClicked = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: 'Eliminar cupón',
      text: '¿Estás seguro de eliminar este cupón?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    })
    if (!isConfirmed) return
    const result = await couponsRest.delete(id)
    if (!result) return
    $(gridRef.current).dxDataGrid('instance').refresh()
  }

  return (<>
    <Table gridRef={gridRef} title='Cupones' rest={couponsRest}
      toolBar={(container) => {
        container.unshift({
          widget: 'dxButton', location: 'after',
          options: {
            icon: 'refresh',
            hint: 'Refrescar tabla',
            onClick: () => $(gridRef.current).dxDataGrid('instance').refresh()
          }
        });
        container.unshift({
          widget: 'dxButton', location: 'after',
          options: {
            icon: 'plus',
            text: 'Nuevo cupón',
            hint: 'Nuevo cupón',
            onClick: () => onModalOpen()
          }
        });
      }}
      columns={[
        {
          dataField: 'id',
          caption: 'ID',
          visible: false
        },
        {
          dataField: 'name',
          caption: 'Nombre',
          width: '40%',
          cellTemplate: (container, { data }) => {
            ReactAppend(container, <p className='mb-0' style={{ width: '100%' }}>
              <b className='d-block'>{data.name}</b>
              <small className='text-wrap text-muted' style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}>{data.description}</small>
            </p>)
          }
        },
        {
          dataField: 'percentage',
          caption: 'Descuento',
          dataType: 'number',
          cellTemplate: (container, { data }) => {
            if (data.type === 'percentage') {
              container.text(`${Math.round(data.amount * 100) / 100}%`)
            } else {
              container.text(`S/. ${Number2Currency(data.amount)}`)
            }
          }
        },
        {
          dataField: 'stock',
          caption: 'Cantidad',
          cellTemplate: (container, { data }) => {
            if (data.initial_stock == null) {
              container.html(renderToString(<>
                <b className='d-block'>Ilimitado</b >
                <small className='text-muted'>{data.one_time_use ? 'De uso único' : 'De uso múltiple'}</small>
              </>))
            } else {
              container.html(renderToString(<>
                <b className='d-block'>{data.stock} de {data.initial_stock}</b>
                <small className='text-muted'>{data.one_time_use ? 'De uso único' : 'De uso múltiple'}</small>
              </>))
            }
          }
        },
        {
          dataField: 'date_begin',
          caption: 'Fecha de inicio',
          dataType: 'date',
        },
        {
          dataField: 'date_end',
          caption: 'Fecha de fin',
          dataType: 'date',
        },
        {
          caption: 'Acciones',
          cellTemplate: (container, { data }) => {
            container.css('text-overflow', 'unset')
            container.append(DxButton({
              className: 'btn btn-xs btn-soft-primary',
              title: 'Editar',
              icon: 'fa fa-pen',
              onClick: () => onModalOpen(data)
            }))
            container.append(DxButton({
              className: 'btn btn-xs btn-soft-danger',
              title: 'Eliminar',
              icon: 'fa fa-trash',
              onClick: () => onDeleteClicked(data.id)
            }))
          },
          allowFiltering: false,
          allowExporting: false
        }
      ]} />
    <Modal modalRef={modalRef} title={isEditing ? 'Editar cupón' : 'Agregar cupón'} onSubmit={onModalSubmit} size='md'>
      <div className='row' id='principal-container'>
        <input ref={idRef} type='hidden' />
        <InputFormGroup eRef={nameRef} label='Nombre' required />
        <TextareaFormGroup eRef={descriptionRef} label='Descripción' rows={2} required />
        <InputFormGroup eRef={percentageRef} label='Descuento' type='number' step={0.01} col='col-md-4' required />
        <SelectFormGroup eRef={comparatorRef} label='Comparador' col='col-md-4 col-sm-6' dropdownParent='#principal-container' required>
          <option value="<">Menor que</option>
          <option value="=">Igual que</option>
          <option value=">">Mayor que</option>
        </SelectFormGroup>
        <InputFormGroup eRef={itemsQuantityRef} label='Items' type='number' col='col-md-4 col-sm-6' required />
        <SelectAPIFormGroup eRef={itemsRef} label='Items incluidos' specification='Deje en blanco para incluir todos los items' searchAPI='/api/admin/items/paginate' searchBy='name' dropdownParent='#principal-container' multiple />
      </div>
    </Modal>
  </>
  )
}

CreateReactScript((el, properties) => {
  createRoot(el).render(<BaseAdminto {...properties} title='Cupones'>
    <Coupons {...properties} />
  </BaseAdminto>);
})