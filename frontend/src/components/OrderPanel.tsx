import React from 'react';

export interface OrderData {
  product?: string;
  quantity?: number;
  color?: string;
  recipient?: string;
  phone?: string;
  address?: string;
  [key: string]: any;
}

interface OrderPanelProps {
  order: OrderData;
}

const OrderPanel: React.FC<OrderPanelProps> = ({ order }) => {
  const hasData = Object.keys(order).length > 0;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        📋 实时订单信息
      </h3>
      
      {hasData ? (
        <div className="space-y-4">
          {order.product && (
            <div className="bg-gray-800 p-4 rounded-2xl">
              <div className="text-xs text-gray-400">商品</div>
              <div className="font-medium">{order.product}</div>
            </div>
          )}
          {order.quantity && (
            <div className="bg-gray-800 p-4 rounded-2xl">
              <div className="text-xs text-gray-400">数量</div>
              <div className="font-medium">{order.quantity} 件</div>
            </div>
          )}
          {order.color && (
            <div className="bg-gray-800 p-4 rounded-2xl">
              <div className="text-xs text-gray-400">颜色/规格</div>
              <div className="font-medium">{order.color}</div>
            </div>
          )}
          {order.recipient && (
            <div className="bg-gray-800 p-4 rounded-2xl">
              <div className="text-xs text-gray-400">收货人</div>
              <div className="font-medium">{order.recipient}</div>
            </div>
          )}
          {order.phone && (
            <div className="bg-gray-800 p-4 rounded-2xl">
              <div className="text-xs text-gray-400">手机号</div>
              <div className="font-medium">{order.phone}</div>
            </div>
          )}
          {order.address && (
            <div className="bg-gray-800 p-4 rounded-2xl">
              <div className="text-xs text-gray-400">收货地址</div>
              <div className="font-medium">{order.address}</div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          对话中将实时显示订单信息
        </div>
      )}
    </div>
  );
};

export default OrderPanel;
